from http.client import HTTPResponse
from django.shortcuts import render,get_object_or_404
from .models import Event
from register.models import RegisterItem
from category.models import Category
from register.views import _cart_id
from django.db.models import Q

# Create your views here.


def waves_events(request,category_slug=None):
    categories = None
    events = None

    if category_slug != None:
        categories = get_object_or_404(Category, slug=category_slug)#to print the category name in website
        events = Event.objects.filter(category__slug=category_slug, is_updated=True)
        event_count = events.count()
    else:
        events = Event.objects.all().filter(is_updated=True).order_by('id')
        event_count = events.count()

    context = {
        'events' : events,
        'event_count' : event_count,
        'categories' : categories,
    }
    #BY DEFAULT WHEN WE GET A OBJECT FROM A MODEL, IT WILL HAVE THE FIELD VALUE THAT IS RETURNED
    # IN __STR__FUNCTION IN THAT MODEL DEFINTION
    #IN CASE OF CATEGORY MODEL, CATEGORY_NAME IS RETURNED IN THAT STR FN, THUS CATEOGRIES VARIABLE WILL
    #BE POINTING TO CATEGORY__NAME
    return render(request,'events.html',context)


def event_detail(request,category_slug,event_slug):

    try:
        single_event = Event.objects.get(category__slug=category_slug,slug=event_slug)
        in_register = RegisterItem.objects.filter(register__register_id=_cart_id(request),
                                                  event=single_event).exists()
    except Exception as e:
        raise e
    context = {
        'single_event':single_event,
        'in_register' : in_register,
    }

    return render(request,'event_detail.html',context)



