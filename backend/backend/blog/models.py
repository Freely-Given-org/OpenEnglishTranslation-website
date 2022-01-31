from email.policy import default
import json
from django.db import models

class Blog(models.Model):
    title = models.CharField(max_length=100, blank=False, default='')
    published = models.BooleanField(default=False)
    body = models.TextField(blank=False)
    author = models.CharField(max_length=100, blank=False)
    labels = models.JSONField(blank=True, null=True)
    created = models.DateField(auto_now_add=True)
    last_modified = models.DateField(auto_now=True)