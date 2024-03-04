from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Task(models.Model):
    title = models.CharField(max_length=200)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='tasks')
    description = models.TextField(blank=True, null=True)
    date = models.DateField()
    time = models.TimeField(blank=True, null=True)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title

