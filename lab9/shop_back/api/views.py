from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Category
from django.forms.models import model_to_dict

# Create your views here.

def products_list(request):
    """List of all Products"""
    products = Product.objects.all()
    data = []
    for product in products:
        data.append({
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category': product.category.id,
            'category_name': product.category.name
        })
    return JsonResponse(data, safe=False)


def product_detail(request, id):
    """Get one Product by ID"""
    try:
        product = Product.objects.get(id=id)
        data = {
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category': product.category.id,
            'category_name': product.category.name
        }
        return JsonResponse(data)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)


def categories_list(request):
    """List of all Categories"""
    categories = Category.objects.all()
    data = []
    for category in categories:
        data.append({
            'id': category.id,
            'name': category.name
        })
    return JsonResponse(data, safe=False)


def category_detail(request, id):
    """Get one Category by ID"""
    try:
        category = Category.objects.get(id=id)
        data = {
            'id': category.id,
            'name': category.name
        }
        return JsonResponse(data)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)


def products_by_category(request, id):
    """List of Products by Category"""
    try:
        category = Category.objects.get(id=id)
        products = category.products.all()
        data = []
        for product in products:
            data.append({
                'id': product.id,
                'name': product.name,
                'price': product.price,
                'description': product.description,
                'count': product.count,
                'is_active': product.is_active,
                'category': product.category.id,
                'category_name': product.category.name
            })
        return JsonResponse(data, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)