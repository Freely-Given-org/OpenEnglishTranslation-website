# Generated by Django 4.0.1 on 2022-02-08 02:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_alter_blog_labels'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='author',
            field=models.CharField(blank=True, default='anonymous', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='blog',
            name='body',
            field=models.TextField(blank=True, default='', null=True),
        ),
    ]
