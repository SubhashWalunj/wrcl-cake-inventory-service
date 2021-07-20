# Getting Started

REST APIs to manage CURD operations form cake inventory

Using cloudinary to save image files

## Available APIs

GET /cake/list :: Get list of all cakes
GET /cake/:id' :: Get cake by it's ID
POST /cake/add :: Create a new cake
PUT /cake/update :: update an existing cake
DELETE /cake/delete/:id :: Delete a cake
POST /image-upload :: to upload a image to cloudinary

## Data store

There is no DB connection to store the data. Data is being stored locally & will flushed after service restart/stop
