from asyncio.windows_events import NULL
from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from blog.models import Blog
from blog.serializers import BlogSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated



@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
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
        blog_data = JSONParser().parse(request)
        Blog_serializer = BlogSerializer(data=blog_data)
        if Blog_serializer.is_valid():
            Blog_serializer.save()
            return JsonResponse(Blog_serializer.data, status=status.HTTP_201_CREATED) 
        return 

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def blog_by_id(request, pk):
    try: 
        blog = Blog.objects.get(pk=pk) 
    except Blog.DoesNotExist: 
        return JsonResponse({'message': 'The blog does not exist'}, status=status.HTTP_404_NOT_FOUND) 
    
    if request.method == 'GET': 
        Blog_serializer = BlogSerializer(blog) 
        return JsonResponse(Blog_serializer.data) 

    elif request.method == 'PUT': 
        blog_data = JSONParser().parse(request) 
        Blog_serializer = BlogSerializer(blog, data=blog_data) 
        if Blog_serializer.is_valid(): 
            Blog_serializer.save() 
            return JsonResponse(Blog_serializer.data) 
        return JsonResponse(Blog_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

    elif request.method == 'DELETE': 
        blog.delete() 
    return JsonResponse({'message': 'Blog was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
def blog_by_id_published(request, pk):
    try: 
        blog = Blog.objects.filter(published=True).get(pk=pk)
    except Blog.DoesNotExist: 
        return JsonResponse({'message': 'The blog does not exist'}, status=status.HTTP_404_NOT_FOUND) 
    
    if request.method == 'GET': 
        Blog_serializer = BlogSerializer(blog) 
        return JsonResponse(Blog_serializer.data) 


@api_view(['GET'])
def blog_list_published(request):
        if 'pk' in request.GET:
            try: 
                blog = Blog.objects.filter(published=True).get(pk=request.GET['pk'])
            except Blog.DoesNotExist: 
                return JsonResponse({'error': 'The blog pk does not exist'}, status=status.HTTP_404_NOT_FOUND) 
            Blog_serializer = BlogSerializer(blog) 
            return JsonResponse(Blog_serializer.data) 
        elif 'title' in request.GET:
            try: 
                blog = Blog.objects.filter(published=True).get(title=request.GET['title'])
            except Blog.DoesNotExist: 
                return JsonResponse({'error': 'The blog title does not exist'}, status=status.HTTP_404_NOT_FOUND) 
            Blog_serializer = BlogSerializer(blog) 
            return JsonResponse(Blog_serializer.data) 

        blog = Blog.objects.filter(published=True)
        Blog_serializer = BlogSerializer(blog, many=True)
        return JsonResponse(Blog_serializer.data, safe=False)
    
