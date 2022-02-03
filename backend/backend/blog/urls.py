from django.urls import re_path 
from blog import views 
 
urlpatterns = [ 
    re_path(r'^$', views.blog_list),
    re_path(r'^id(?P<pk>[0-9]{1,15})$', views.blog_by_id),
    re_path(r'^published/', views.blog_list_published),
]
