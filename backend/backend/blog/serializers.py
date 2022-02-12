from rest_framework import serializers 
from blog.models import Blog
 
 
class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ('id',
                  'title',
                  'published',
                  'body',
                  'last_modified',
                  'created',
                  'author',
                  'labels'
                  )
