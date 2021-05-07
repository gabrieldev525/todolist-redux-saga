# Django
from django.contrib import admin

# Local
from .models import Todo


class TodoAdmin(admin.ModelAdmin):
    list_display = ('title',)


admin.site.register(Todo, TodoAdmin)
