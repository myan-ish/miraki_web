import imp
from unicodedata import category
from django.db import models
import slugify

class Category(models.Model):
    name = models.CharField(max_length=50)
    slug = models.SlugField(max_length=50, unique=True)

    class Meta:
        ordering = ('name',)
        verbose_name = 'category'
        verbose_name_plural = 'categories'

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        self.slug = slugify.slugify(self.name)
        super(Category, self).save(*args, **kwargs)

class Style(models.Model):
    name = models.CharField(max_length=50)
    slug = models.SlugField(max_length=50, unique=True)

    class Meta:
        ordering = ('name',)
        verbose_name = 'style'
        verbose_name_plural = 'styles'

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        self.slug = slugify.slugify(self.name)
        super(Style, self).save(*args, **kwargs)

class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    style = models.ForeignKey(Style, on_delete=models.CASCADE)

    class Meta:
        ordering = ('name',)
        verbose_name = 'product'
        verbose_name_plural = 'products'

    def __str__(self):
        return self.name