#!/bin/bash
#
# start_django_backend.sh
#       Last modified: 2023-03-13 RJH
#

# From OpenEnglishTranslation-website/backend/backend/ folder
# Remove the backend/backend/backend folder -- it seems to get recreated by Django
rm -r backend
# Start Django
python manage.py startapp backend

