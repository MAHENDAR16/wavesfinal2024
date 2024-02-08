from django import forms
from .models import Order


class OrderForm(forms.ModelForm):
    class Meta:
        model = Order
        fields = ['first_name', 'last_name', 'phone', 'email', 'roll_number', 'date_of_birth', 'college', 'Department', 'payment_mode','razor_payment_id']
