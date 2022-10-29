# oas-home-site
Portfolio and Marketing Site for "Octopus Attacks Shark!!" [OAS]

# Architecture
Static HTML/CSS site served via simple FTP

## Hosting
Hosted on ToasterCat AWS account via S3 Static Hosting Configuration

# Deployment
Deployed via AWS-CLI

Production (www)
`$ aws s3 sync ./ s3://www.octopus-attacks-shark.com/ --exclude '.git/*' --profile toastercat-s3`

Integration (beta, gamma)
`$ aws s3 sync ./ s3://beta.octopus-attacks-shark.com/ --exclude '.git/*' --profile toastercat-s3`
