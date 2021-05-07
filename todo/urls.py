# django imports
from django.urls import include, path

# third imports
from rest_framework import routers

# local imports
from .views import TodoAPIView

router = routers.SimpleRouter(trailing_slash=False)
router.register(r'todo', TodoAPIView, 'todo')

urlpatterns = [
    path('', include(router.urls)),
]
