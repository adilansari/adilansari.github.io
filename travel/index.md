---
layout: page
title: Travel Posts
excerpt: "My travel log sorted by date."
search_omit: true
image:
  feature: travel/loafers_airport.jpg
  credit: Myself
---

<ul class="post-list">
{% for post in site.categories.travel %}
  <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span>{% if post.excerpt %} <span class="excerpt">{{ post.excerpt }}</span>{% endif %}</a></article></li>
{% endfor %}
</ul>
