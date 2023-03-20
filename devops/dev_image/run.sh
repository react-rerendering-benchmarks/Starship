#!/bin/bash -ex

# Start dev docker image with a lot of flags

TOT=$(git rev-parse --show-toplevel)
DEV_IMAGE=$(cat "${TOT}/devops/dev_image/DEV_IMAGE")
DIR_NAME=$(basename ${TOT})

docker run --rm -it --privileged --name dev \
  -v "/var/run/docker.sock":"/var/run/docker.sock" \
  -v "/lib/modules":"/lib/modules" \
  -v "/sys":"/sys" \
  -v "/usr/src":"/usr/src" \
  -v "${TOT}:/${DIR_NAME}" \
  --workdir=/${DIR_NAME} \
  "${DEV_IMAGE}"
