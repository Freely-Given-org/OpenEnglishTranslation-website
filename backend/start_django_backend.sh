#!/bin/bash
#
# start_django_backend.sh
#       Last modified: 2024-02-05 RJH
#

# From OpenEnglishTranslation-website/backend/ folder
python -m venv myVenv/
source myVenv/bin/activate
cd backend

# From OpenEnglishTranslation-website/backend/backend/ folder
# Start Django server
python manage.py runserver
