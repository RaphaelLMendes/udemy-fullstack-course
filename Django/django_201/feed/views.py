from django.db.models.query import QuerySet
from django.views.generic import ListView, DetailView

from .models import Post

# Create your views here.
class HomePage(ListView):
    http_method_names = ['get']
    template_name = 'feed/homepage.html'
    model = Post
    ordering = '-id'
    context_object_name = "posts"
    querySet = Post.objects.all().order_by('-id')[0:30]

class PostDetailView(DetailView):
    http_method_names = ['get']
    template_name = 'feed/detail.html'
    model = Post
    context_object_name = "post"

