from django.db.models.query import QuerySet
from django.views.generic import ListView

from .models import Post

# Create your views here.
class HomePage(ListView):
    http_method_names = ['get']
    template_name = 'feed/homepage.html'
    model = Post
    ordering = '-id'
    context_object_name = "posts"
    querySet = list(Post.objects.all().order_by('-id')[0:30])
    

