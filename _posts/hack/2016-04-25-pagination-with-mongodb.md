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