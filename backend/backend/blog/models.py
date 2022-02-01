from django.db import models
from django.contrib.postgres.fields import ArrayField

class Blog(models.Model):
    title = models.CharField(max_length=100, blank=False, default='')
    published = models.BooleanField(default=False)
    body = models.TextField(blank=False)
    author = models.CharField(max_length=100, blank=False)
    labels = ArrayField(models.CharField(max_length=200), default=list)
    created = models.DateField(auto_now_add=True)
    last_modified = models.DateField(auto_now=True)