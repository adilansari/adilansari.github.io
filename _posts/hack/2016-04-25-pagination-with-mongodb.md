---
layout: post
title: "Pagination with MongoDB"
modified:
categories: hack
excerpt:
tags: [mongodb, pagination, scalability]
image:
  feature:
date: 2016-04-25T17:56:10-07:00
---

* Table of contents
{:toc}

## What is?
I assume you are here becuase you realized the need for it, will keep this short. Pagination is a type of user control that lets user browse a large number of database rows in the form of pages.

I will discuss two ways to effectively paginate using MongoDB.

## 1: Using cursor.skip() and cursor.limit()
For if we want to limit `pagesize=10` comments per page, our data construct would look like:
{% highlight javascript %}
{% raw %}
// Page 1
db.comments.find().limit(10);
// Page 2
db.comments.find().skip(10).limit(10);
// Page 3
db.comments.find().skip(20).limit(10);
{% endraw %}
{% endhighlight %}

Generic equation for `page=n` would look like:
{% highlight javascript %}
{% raw %}
db.comments.find().skip(pagesize * (n-1)).limit(pagesize);
{% endraw %}
{% endhighlight %}

This is native to MongoDB however, this approach has a __<font color="red">drawback</font>__ as [MongoDB manual](https://docs.mongodb.org/manual/reference/method/cursor.skip/) states:

> The cursor.skip() method is often expensive because it requires the server to walk from the beginning of the collection or index to get the offset or skip position before beginning to return results. As the offset (e.g. pageNumber above) increases, cursor.skip() will become slower and more CPU intensive. With larger collections, cursor.skip() may become IO bound.

## 2: Using natural ordering to skip data
This approach uses the [ObjectId](https://docs.mongodb.org/manual/reference/method/ObjectId/). What is an ObjectId? A __12-byte__ ObjectId value is composed of:
{% raw %}
- a 4-byte value representing the seconds since the Unix epoch,
- a 3-byte machine identifier,
- a 2-byte process id, and
- a 3-byte counter, starting with a random value.
{% endraw %}

The **_id** field in your mongo document is an indexed __ObjectId__ by default, and the timestamp component brings a natural chronological ordering to your data structure. Here's what we will do:
- cache the **_id** for last document in the current page,
- fetch documents greater than last saved **_id** in the next page

{% highlight javascript %}
{% raw %}
// Page 1
db.comments.find().limit(10);
last_comment_id = ...
// Page 2
db.comments.find({"_id" > last_comment_id}).skip(10).limit(10);
// Update last seen id
last_comment_id = ...
{% endraw %}
{% endhighlight %}

#### Comparison
1. **skip()** - Walks over each document from beginning of collection to offset. **Bid O(n)**.
2. **find({_id: ..})** - Since, the **_id** field is indexed by default, this is prety fast in getting to the offset. **Big O(log n)**

{: .notice--danger}
_If you are using a field other than **_id** for offset, make sure the field is indexed else the performance will suffer._