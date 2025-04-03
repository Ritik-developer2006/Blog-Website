from django.db import models


# Create your models here.
class Blogs(models.Model):
    bid = models.CharField(max_length=10)
    fullName = models.CharField(max_length=20)
    email = models.EmailField(max_length=50)
    blogTitle = models.CharField(max_length=300)
    blogDescription = models.CharField(max_length=1000)
    createdAt = models.DateTimeField(auto_now=True)
