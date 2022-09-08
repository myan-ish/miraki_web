from django.contrib import admin

from base.models import Category, Image, Product, Style

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'style', 'price','image_tag')
    list_filter = ('category', 'style')
    search_fields = ('name', 'description')



admin.site.register(Category)
admin.site.register(Style)
admin.site.register(Product, ProductAdmin)
admin.site.register(Image)