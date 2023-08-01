/** @type {import('next').NextConfig} */

let domains = ['127.0.0.1', 'localhost', 'azurite']

if (process.env.NEXT_PUBLIC_IMAGE_HOST !== undefined) {
    domains.push(process.env.NEXT_PUBLIC_IMAGE_HOST)
}

const nextConfig = {
    images: {
        domains: domains,
    }
};

module.exports = nextConfig;
