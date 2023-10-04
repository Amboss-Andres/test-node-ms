#############################################################
#   Ready the helm and Jenkins files for new service        #
#   replaces the original text with new name for servie     #
#############################################################

if [ -z "${1}" ]; then
  echo "usage: $(basename ${0}) \$new_name \$new_address"
  exit 1
fi
# Set endpoint to service name if one is not provided.
ENDPOINT=${2:-${1}}

# The service will be deployed to staging and production

echo "Replacing template service name with ${1}."
find . -type f -name '*.yaml' | xargs sed -i.ORIG "s/BASIC_SERVICE/${1}/gi"
find . -type f -name '*.yml' | xargs sed -i.ORIG "s/BASIC_SERVICE/${1}/gi"
find . -type f -name '*.txt' | xargs sed -i.ORIG "s/BASIC_SERVICE/${1}/gi"
find . -type f -name "Jenkinsfile*" | xargs sed -i.ORIG "s/BASIC_SERVICE/${1}/gi"
find . -type f -name "*.sh" | xargs sed -i.ORIG "s/BASIC_SERVICE/${1}/gi"
find . -type f -name "*.json" | xargs sed -i.ORIG "s/BASIC_SERVICE/${1}/gi"

echo "Replacing endpoint name with ${ENDPOINT}."
find . -type f -name "*.yaml" | xargs sed -i.ORIG "s/BASE/${ENDPOINT}/gi"
find . -type f -name "*.yml" | xargs sed -i.ORIG "s/BASE/${ENDPOINT}/gi         "

find . -type f -name "*.ORIG" -delete

echo "Done!"
