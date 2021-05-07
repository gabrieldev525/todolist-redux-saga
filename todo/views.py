# Third party
from rest_framework.viewsets import ModelViewSet

# Local
from .models import Todo
from .serializers import TodoSerializer


class TodoAPIView(ModelViewSet):

    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
