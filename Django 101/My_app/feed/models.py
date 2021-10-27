from django.db import models
from sorl.thumbnail import ImageField

# Create your models here.
class Post(models.Model):
    text = models.CharField(max_length=140, blank=False, null=False, default='SOME STRING')
    image = ImageField(default="")

    def __str__(self):
        return self.text