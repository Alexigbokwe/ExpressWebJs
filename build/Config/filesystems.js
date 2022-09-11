"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Env_1 = require("Elucidate/Env");
const path_1 = (0, tslib_1.__importDefault)(require("path"));
exports.default = {
    /*
      |--------------------------------------------------------------------------
      | Default Filesystem Disk
      |--------------------------------------------------------------------------
      |
      | Here you may specify the default filesystem disk that should be used
      | by ExpressWebJs. The "local" disk, as well as a variety of cloud
      | based disks are available to your application.
      |
      */
    default: (0, Env_1.env)("FILESYSTEM_DRIVER", "local"),
    /*
      |--------------------------------------------------------------------------
      | Default Cloud Filesystem Disk
      |--------------------------------------------------------------------------
      |
      | Many applications store files both locally and in the cloud. For this
      | reason, you may specify a default "cloud" driver here. This driver
      | will be bound as the Cloud disk implementation in the container.
      |
      */
    cloud: (0, Env_1.env)("FILESYSTEM_CLOUD", "s3"),
    /*
      |--------------------------------------------------------------------------
      | Filesystem Disks
      |--------------------------------------------------------------------------
      |
      | Here you may configure as many filesystem "disks" as you wish, and you
      | may even configure multiple disks of the same driver. Defaults have
      | been setup for each driver as an example of the required options.
      |
      | Supported Drivers: "local", "s3", "azure", "gridfs","postgreSQL","openstack"
      |
      */
    disks: {
        local: {
            driver: "local",
            directory: path_1.default.join(__dirname, "../Storage/"),
        },
        // Stream file uploads directly to Amazon S3
        s3: {
            driver: "s3",
            key: (0, Env_1.env)("AWS_ACCESS_KEY"),
            secret: (0, Env_1.env)("AWS_SECRET_ACCESS_KEY"),
            bucket: (0, Env_1.env)("AWS_BUCKET_NAME"),
            region: (0, Env_1.env)("AWS_ACCESS_REGION"),
            headers: {
                "x-amz-acl": (0, Env_1.env)("AWS_ACL_FILE_PERMISSIONS"),
            },
        },
        // Stream file uploads directly to Azure blob storage.
        azure: {
            driver: "azure",
            key: "YOUR_AZURE_STORAGE_ACCOUNT",
            secret: "YOUR_AZURE_API_SECRET",
            container: "YOUR_AZURE_CONTAINER",
        },
        // Stream file uploads directly to MongoDB's GridFS.
        gridfs: {
            driver: "gridfs",
            uri: "YOUR_S3_API_KEY",
        },
        // Stream file uploads directly to PostgreSQL database.
        postgreSQL: {
            driver: "postgreSQL",
            uri: "YOUR_S3_API_KEY",
        },
        // Stream file uploads directly to openstack blob.
        openstack: {
            driver: "openstack",
            credentials: {
                region: "YOUR_REGION",
                userId: "YOUR_USER_ID",
                password: "YOUR_PASSWORD",
                auth_url: "YOUR_AUTH_URL",
                projectId: "YOUR_TENANT_ID",
            },
            container: "YOUR_CONTAINER_NAME",
        },
    },
};
