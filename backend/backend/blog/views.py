from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from blog.models import Blog
from blog.serializers import BlogSerializer
from rest_framework.decorators import api_view



@api_view(['GET', 'POST'])
def blog_list(request):
    if request.method == 'GET':
        blog = Blog.objects.all()
        
        title = request.GET.get('title', None)
        if title is not None:
            blog = blog.filter(title__icontains=title)
        
        Blog_serializer = BlogSerializer(blog, many=True)
        return JsonResponse(Blog_serializer.data, safe=False)
        # 'safe=False' for objects serialization

    elif request.method == 'POST':
        tutorial_data = JSONParser().parse(request)
        Blog_serializer = BlogSerializer(data=tutorial_data)
        if Blog_serializer.is_valid():
            Blog_serializer.save()
            return JsonResponse(Blog_serializer.data, status=status.HTTP_201_CREATED) 
        return 

@api_view(['GET', 'PUT', 'DELETE'])
def blog_by_id(request, pk):
    # find tutorial by pk (id)
    try: 
        blog = Blog.objects.get(pk=pk) 
    except Blog.DoesNotExist: 
        return JsonResponse({'message': 'The tutorial does not exist'}, status=status.HTTP_404_NOT_FOUND) 
    
    if request.method == 'GET': 
        Blog_serializer = BlogSerializer(blog) 
        return JsonResponse(Blog_serializer.data) 

    elif request.method == 'PUT': 
        tutorial_data = JSONParser().parse(request) 
        Blog_serializer = BlogSerializer(blog, data=tutorial_data) 
        if Blog_serializer.is_valid(): 
            Blog_serializer.save() 
            return JsonResponse(Blog_serializer.data) 
        return JsonResponse(Blog_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

    elif request.method == 'DELETE': 
        blog.delete() 
    return JsonResponse({'message': 'Blog was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def blog_list_published(request):
    blog = Blog.objects.filter(published=True)
        
    if request.method == 'GET': 
        Blog_serializer = BlogSerializer(blog, many=True)
        return JsonResponse(Blog_serializer.data, safe=False)