from django.contrib import admin

from base.models import Category, Product, Style

admin.site.register(Category)
admin.site.register(Style)
admin.site.register(Product)