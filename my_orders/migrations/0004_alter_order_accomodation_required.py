# Generated by Django 4.0.6 on 2024-01-31 16:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('my_orders', '0003_alter_order_college'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='accomodation_required',
            field=models.CharField(default='No', max_length=100, null=True),
        ),
    ]
