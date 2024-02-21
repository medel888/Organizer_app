from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class Task(models.Model):
    PRIORITY_CHOICES = [
        ('H', 'Alta'),
        ('M', 'Media'),
        ('L', 'Baja'),
    ]

    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    date = models.DateField()
    priority = models.CharField(max_length=1, choices=PRIORITY_CHOICES)
    completed = models.BooleanField(default=False)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='tasks')

    def __str__(self):
        return self.title

