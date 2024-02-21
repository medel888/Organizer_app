from rest_framework import serializers
from .models import Task, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'description']

class TaskSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=False)

    class Meta:
        model = Task
        fields = ['id', 'title', 'description', 'date', 'priority', 'completed', 'category']
