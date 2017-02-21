---
layout: page
title: Engineering Lab
excerpt: "An archive of my horrific coding experiments sorted by date."
search_omit: true
image:
    feature: about/broken_computer.jpg
---

<ul class="post-list">
{% for post in site.categories.hack %}
  <li><article><a href="{{ site.url }}{{ post.url }}">{{ post.title }} <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span>{% if post.excerpt %} <span class="excerpt">{{ post.excerpt }}</span>{% endif %}</a></article></li>
{% endfor %}
</ul>
