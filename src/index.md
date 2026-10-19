---
title: Talley Hall home page
layout: base.njk
templateEngineOverride: njk, md
---
## Under Construction! Check back later. -10/19/2026

Blog Posts:
<ul>
{% for post in collections.posts | reverse %}
    <li><a href="{{ post.url }}">{{post.data.title }}</a></li>
{% endfor %}
</ul>
