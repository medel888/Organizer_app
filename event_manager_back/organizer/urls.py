
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from app.organizer_app.views import CategoryViewSet, TaskViewSet

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'tasks', TaskViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('admin/', admin.site.urls),
]
