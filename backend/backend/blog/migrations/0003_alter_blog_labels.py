# Generated by Django 4.0.1 on 2022-02-01 02:55

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_alter_blog_labels'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='labels',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=200), default=list, size=None),
        ),
    ]