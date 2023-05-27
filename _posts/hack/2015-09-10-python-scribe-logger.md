---
layout: post
title: "Python Scribe Logger"
modified:
categories: hack
excerpt: Lightweight scribe logging client for python
tags: [python, open-source, api]
image:
date: 2015-09-10T00:10:34-07:00
---

[![Build
Status](https://travis-ci.org/adilansari/python-scribe-logger.svg?branch=master)](https://travis-ci.org/adilansari/python-scribe-logger)
[![Code
Climate](https://codeclimate.com/github/adilansari/python-scribe-logger/badges/gpa.svg)](https://codeclimate.com/github/adilansari/python-scribe-logger)
[![Coverage
Status](https://coveralls.io/repos/adilansari/python-scribe-logger/badge.svg?branch=master)](https://coveralls.io/r/adilansari/python-scribe-logger?branch=master)
[![License](https://img.shields.io/github/license/adilansari/python-scribe-logger.svg)](https://github.com/adilansari/python-scribe-logger/blob/master/LICENSE.mkd)
[![Downloads](https://img.shields.io/pypi/dm/scribe_logger.svg)](https://pypi.python.org/pypi/scribe_logger/)

* Table of contents
{:toc}

## Scribe logger

This package contains a low level interface for writing to Scribe, as
well as a higher level log handler which plays nicely with Python's
logging facilities.

<!-- Place this tag where you want the button to render. -->
<a class="github-button" data-style="mega" href="https://github.com/adilansari/python-scribe-logger" >View on github</a>
<a class="github-button" href="https://github.com/adilansari/python-scribe-logger" data-icon="octicon-eye" data-style="mega" data-count-href="/adilansari/python-scribe-logger/watchers" data-count-api="/repos/adilansari/python-scribe-logger#subscribers_count" data-count-aria-label="# watchers on GitHub" aria-label="Watch adilansari/python-scribe-logger on GitHub">Watch</a>
<a class="github-button" href="https://github.com/adilansari/python-scribe-logger" data-icon="octicon-star" data-style="mega" data-count-href="/adilansari/python-scribe-logger/stargazers" data-count-api="/repos/adilansari/python-scribe-logger#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star adilansari/python-scribe-logger on GitHub">Star</a>
<a class="github-button" href="https://github.com/adilansari/python-scribe-logger/fork" data-icon="octicon-repo-forked" data-style="mega" data-count-href="/adilansari/python-scribe-logger/network" data-count-api="/repos/adilansari/python-scribe-logger#forks_count" data-count-aria-label="# forks on GitHub" aria-label="Fork adilansari/python-scribe-logger on GitHub">Fork</a>
<a class="github-button" href="https://github.com/adilansari/python-scribe-logger/archive/master.zip" data-icon="octicon-cloud-download" data-style="mega" aria-label="Download adilansari/python-scribe-logger on GitHub">Download</a>

> Supports Python 2.7

---

## Installation

`pip install scribe-logger`

---

## Testing locally

{% highlight bash %}
{% raw %}

$ git clone https://github.com/adilansari/python-scribe-logger.git
$ cd python-scribe-logger
$ pip install -U -r requirements.txt
$ python runtests.py

{% endraw %}
{% endhighlight %}

---

## Logger usage

{% highlight python %}
{% raw %}

from scribe_logger.logger import ScribeLogHandler
import logging

my_logger = logging.getLogger('MyLogger')
my_logger.setLevel(logging.DEBUG)

scribe = ScribeLogHandler('localhost', 1464, category='test_category')
scribe.setLevel(logging.DEBUG)
my_logger.addHandler(scribe)

my_logger.info('This is a test message')

{% endraw %}
{% endhighlight %}

Exceptions are suppressed by default. Use **silent=False** to raise
them:
{% highlight python %}
{% raw %}

scribe = ScribeLogHandler('localhost', 1464, category='test_category', silent=False)

{% endraw %}
{% endhighlight %}

---

## Writer usage

{% highlight python %}
{% raw %}

from scribe_logger.writer import ScribeWriter

writer = ScribeWriter('localhost', 1464, 'test_category')
try:
    writer.write('test_message_1')
    writer.write(['test_message_1', 'test_message_2', 'test_message_3'])
except ScribeLoggerError:
    raise

{% endraw %}
{% endhighlight %}

Exceptions are raised by default. Use **silent=True** to suppress
them:
{% highlight python %}
{% raw %}

writer = ScribeWriter('localhost', 1464, 'test_category', silent=True)
writer.write('test_message_1')
writer.write(['test_message_1', 'test_message_2', 'test_message_3'])

{% endraw %}
{% endhighlight %}

---

## Contributors
- <a class="github-button" href="https://github.com/adilansari" data-style="mega" data-count-href="/adilansari/followers" data-count-api="/users/adilansari#followers" data-count-aria-label="# followers on GitHub" aria-label="Follow @adilansari on GitHub">Follow @adilansari</a>
- [@mwhooker](https://github.com/mwhooker)
- [@lenn0x](https://github.com/lenn0x)
<!-- Place this tag right after the last button or just before your close body tag. -->
<script async defer id="github-bjs" src="https://buttons.github.io/buttons.js"></script>
