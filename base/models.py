import imp
from unicodedata import category
from django.db import models
import slugify

class Category(models.Model):
    name = models.CharField(max_length=50)
    slug = models.SlugField(max_length=50, unique=True, blank=True)

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
    slug = models.SlugField(max_length=50, unique=True, blank=True)

    class Meta:
        ordering = ('name',)
        verbose_name = 'style'
        verbose_name_plural = 'styles'

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        self.slug = slugify.slugify(self.name)
        super(Style, self).save(*args, **kwargs)

class Image(models.Model):
    name = models.CharField(max_length=50)
    image = models.ImageField(upload_to='images/')

    class Meta:
        ordering = ('name',)
        verbose_name = 'image'
        verbose_name_plural = 'images'

    def __str__(self):
        return self.name
    
    def image_url(self):
        return self.image.url

class Product(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    images = models.ManyToManyField('Image', related_name='products')

    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    style = models.ForeignKey(Style, on_delete=models.CASCADE)

    class Meta:
        ordering = ('name',)
        verbose_name = 'product'
        verbose_name_plural = 'products'
    
    def image_tag(self):
        from django.utils.html import mark_safe
        return mark_safe('<img src="/media/%s" width="300" height="150" />' % (self.images.all()[0].image))
    
    image_tag.short_description = 'Image'

    def __str__(self):
        return self.name