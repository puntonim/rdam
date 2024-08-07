# **residenzaanticomulino.it**

Residenza Antico Mulino frontend for the web app deployed at: https://residenzaanticomulino.it

With HTML and vanilla JavaScript.

# IMPORTANT

This source code resides in the private repo: https://github.com/puntonim/residenza-antico-mulino-monorepo.
Do not ever checkout and push code to https://github.com/puntonim/residenzaanticomulino.it/ but instead use
the private repo.

## So why does this repo even exist?

Since GitHub Pages can only exist in free _public_ repos then when deploying the
frontend, the FE code is force-pushed to this public repo.

# Urls

- https://residenzaanticomulino.it
- https://puntonim.github.io/residenzaanticomulino.it

## DNS Record at Gandi

```
@ 1800 IN A 185.199.108.153
@ 1800 IN A 185.199.109.153
@ 1800 IN A 185.199.110.153
@ 1800 IN A 185.199.111.153
www 1800 IN CNAME residenzaanticomulino.it.
```

# FE Deployment

```shell
$ make deploy
```

# BE

There is a small backend deployed to AWS Lambda.

Its source code is in https://github.com/puntonim/residenza-antico-mulino-monorepo.

# Copyright

Copyright Residenza Antico Mulino and puntonim (https://github.com/puntonim). No License.
