'use strict';

// Assigns global constants to things like external documentation, links to external resources, annotations and naming, etc.
// Can be customized using custom scripts in the master config file that override one or multiple of these objects.
// Reference: https://docs.openshift.org/latest/install_config/web_console_customization.html#loading-custom-scripts-and-stylesheets

// NOTE: Update extensions/examples/online-extensions.js if you add a new help link to this map.

window.OPENSHIFT_CONSTANTS = {
  // Maps links to specific topics in external documentation.
  HELP: {
    "cli":                     "https://docs.openshift.org/latest/cli_reference/overview.html",
    "get_started_cli":         "https://docs.openshift.org/latest/cli_reference/get_started_cli.html",
    "basic_cli_operations":    "https://docs.openshift.org/latest/cli_reference/basic_cli_operations.html",
    "build-triggers":          "https://docs.openshift.org/latest/dev_guide/builds.html#build-triggers",
    "webhooks":                "https://docs.openshift.org/latest/dev_guide/builds.html#webhook-triggers",
    "new_app":                 "https://docs.openshift.org/latest/dev_guide/new_app.html",
    "start-build":             "https://docs.openshift.org/latest/dev_guide/builds.html#starting-a-build",
    "deployment-operations":   "https://docs.openshift.org/latest/cli_reference/basic_cli_operations.html#build-and-deployment-cli-operations",
    "route-types":             "https://docs.openshift.org/latest/architecture/core_concepts/routes.html#route-types",
    "persistent_volumes":      "https://docs.openshift.org/latest/dev_guide/persistent_volumes.html",
    "compute_resources":       "https://docs.openshift.org/latest/dev_guide/compute_resources.html",
    "pod_autoscaling":         "https://docs.openshift.org/latest/dev_guide/pod_autoscaling.html",
    "application_health":      "https://docs.openshift.org/latest/dev_guide/application_health.html",
    "source_secrets":          "https://docs.openshift.org/latest/dev_guide/builds.html#using-secrets",
    "git_secret":              "https://docs.openshift.org/latest/dev_guide/builds.html#using-private-repositories-for-builds",
    "pull_secret":             "https://docs.openshift.org/latest/dev_guide/managing_images.html#using-image-pull-secrets",
    "managing_secrets":        "https://docs.openshift.org/latest/dev_guide/service_accounts.html#managing-allowed-secrets",
    "creating_secrets":        "https://docs.openshift.org/latest/dev_guide/secrets.html#creating-and-using-secrets",
    "storage_classes":         "https://docs.openshift.org/latest/install_config/persistent_storage/dynamically_provisioning_pvs.html",
    "selector_label":          "https://docs.openshift.org/latest/install_config/persistent_storage/selector_label_binding.html",
    "rolling_strategy":        "https://docs.openshift.org/latest/dev_guide/deployments.html#rolling-strategy",
    "recreate_strategy":       "https://docs.openshift.org/latest/dev_guide/deployments.html#recreate-strategy",
    "custom_strategy":         "https://docs.openshift.org/latest/dev_guide/deployments.html#custom-strategy",
    "lifecycle_hooks":         "https://docs.openshift.org/latest/dev_guide/deployments.html#lifecycle-hooks",
    "new_pod_exec":            "https://docs.openshift.org/latest/dev_guide/deployments.html#pod-based-lifecycle-hook",
    "authorization":           "https://docs.openshift.org/latest/architecture/additional_concepts/authorization.html",
    "roles":                   "https://docs.openshift.org/latest/architecture/additional_concepts/authorization.html#roles",
    "service_accounts":        "https://docs.openshift.org/latest/dev_guide/service_accounts.html",
    "users_and_groups":        "https://docs.openshift.org/latest/architecture/additional_concepts/authentication.html#users-and-groups",
    // default should remain last, add new links above
    "default":                 "https://docs.openshift.org/latest/welcome/index.html"
  },
  // Maps links names to URL's where the CLI tools can be downloaded, may point directly to files or to external pages in a CDN, for example.
  CLI: {
    "Latest Release":          "https://github.com/openshift/origin/releases/latest"
  },
  // The default CPU target percentage for horizontal pod autoscalers created or edited in the web console.
  // This value is set in the HPA when the input is left blank.
  DEFAULT_HPA_CPU_TARGET_PERCENT: 80,

  // true indicates that deployment metrics should be disabled on the web console overview
  DISABLE_OVERVIEW_METRICS: false,

  // This blacklist hides certain kinds from the "Other Resources" page because they are unpersisted, disallowed for most end users, or not supported by openshift but exist in kubernetes
  AVAILABLE_KINDS_BLACKLIST: [
      // These are k8s kinds that are not supported in the current release of OpenShift
      "Binding",
      "Ingress",

      // These are things like DCPs that aren't actually persisted resources
      "DeploymentConfigRollback"
  ],

  ENABLE_TECH_PREVIEW_FEATURE: {
    pipelines: true
  },

  // href's will be prefixed with /project/{{projectName}} unless they are absolute URLs
  PROJECT_NAVIGATION: [
    {
      label: "Overview",
      iconClass: "fa fa-dashboard",
      href: "/overview"
    },
    {
      label: "Applications",
      iconClass: "fa fa-cubes",
      secondaryNavSections: [
        {
          items: [
            {
              label: "Deployments",
              href: "/browse/deployments",
              prefixes: [
                "/browse/deployment/",
                "/browse/dc/",
                "/browse/rs/",
                "/browse/rc/"
              ]
            },
            {
              label: "Pods",
              href: "/browse/pods",
              prefixes: [
                "/browse/pods/"
              ]
            }
          ]
        },
        {
          header: "Networking",
          items: [
            {
              label: "Services",
              href: "/browse/services",
              prefixes: [
                "/browse/services/"
              ]
            },
            {
              label: "Routes",
              href: "/browse/routes",
              prefixes: [
                "/browse/routes/"
              ]
            }
          ]
        }
      ]
    },
    {
      label: "Builds",
      iconClass: "pficon pficon-build",
      secondaryNavSections: [
        {
          items: [
            {
              label: "Builds",
              href: "/browse/builds",
              prefixes: [
                "/browse/builds/",
                "/browse/builds-noconfig/"
              ]
            },
            {
              label: "Pipelines",
              href: "/browse/pipelines",
              prefixes: [
                "/browse/pipelines/"
              ],
              isValid: function() {
                return !!_.get(window.OPENSHIFT_CONSTANTS, 'ENABLE_TECH_PREVIEW_FEATURE.pipelines');
              }
            },
            {
              label: "Images",
              href: "/browse/images",
              prefixes: [
                "/browse/images/"
              ]
            }
          ]
        }
      ]
    },
    {
      label: "Resources",
      iconClass: "fa fa-files-o",
      secondaryNavSections: [
        {
          items: [
            {
              label: "Quota",
              href: "/quota"
            },
            {
              label: "Membership",
              href: "/membership",
              // supports: {resource: '', verb: '', group: '' }
              canI: {
                resource: 'rolebindings',
                verb: 'list'
              }
            },
            {
              label: "Secrets",
              href: "/browse/secrets",
              canI: {
                resource: 'secrets',
                verb: 'list'
              }
            },
            {
              label: "Other Resources",
              href: "/browse/other"
            }
          ]
        }
      ]
    },
    {
      label: "Storage",
      iconClass: "pficon pficon-container-node",
      href: "/browse/storage",
      prefixes: [
        "/browse/storage/"
      ]
    },
    {
      label: "Monitoring",
      iconClass: "pficon pficon-screen",
      href: "/monitoring",
      prefixes: [
        "/browse/events"
      ]
      // TODO uncomment when we have at least one of metrics or logs pages and then take off the href going straight to events
      // secondaryNavSections: [
      //   {
      //     items: [
      //       {
      //         label: "Events",
      //         href: "/browse/events"
      //       },
      //       {
      //         label: "Logs",
      //         href: "#" // TODO
      //       },
      //       {
      //         label: "Metrics",
      //         href: "#" // TODO
      //       }
      //     ]
      //   }
      // ]
    }
  ],
  CATALOG_CATEGORIES: [
    {
      id: 'languages',
      label: "Languages",
      iconClassDefault: "fa fa-code",
      items: [
        {
          id: "java",
          label: "Java",
          iconClass: "font-icon icon-openjdk",
          subcategories: [{
            id: 'java-subcategories',
            items: [
              {
                id: "amq",
                label: "Red Hat JBoss A-MQ"
              },
              {
                id: "processserver",
                label: "Red Hat JBoss BPM Suite"
              },
              {
                id: "decisionserver",
                label: "Red Hat JBoss BRMS"
              },
              {
                id: "datagrid",
                label: "Red Hat JBoss Data Grid"
              },
              {
                id: "eap",
                label: "Red Hat JBoss EAP"
              },
              {
                id: "jboss-fuse",
                label: "Red Hat JBoss Fuse"
              },
              {
                id: "tomcat",
                label: "Red Hat JBoss Web Server (Tomcat)"
              },
              {
                id: "sso",
                label: "Red Hat Single Sign-On"
              },
              {
                id: "wildfly",
                label: "WildFly"
              }
            ]
          }]
        },
        {
          id: "javascript",
          categoryAliases: ["nodejs","js"],
          label: "JavaScript",
          iconClass: "font-icon icon-js"
        },
        {
          id: "dotnet",
          label: ".NET",
          iconClass: "font-icon icon-dotnet"
        },
        {
          id: "perl",
          label: "Perl",
          iconClass: "font-icon icon-perl"
        },
        {
          id: "php",
          label: "PHP",
          iconClass: "font-icon icon-php"
        },
        {
          id: "python",
          label: "Python",
          iconClass: "font-icon icon-python"
        },
        {
          id: "ruby",
          label: "Ruby",
          iconClass: "font-icon icon-ruby"
        }
      ]
    },
    {
      id: 'technologies',
      label: "Technologies",
      items: [
        {
          id: "business-process-services",
          categoryAliases: ["decisionserver","processserver"],
          label: "Business Process Services",
          description: "Model, automate, and orchestrate business processes across applications, services, and data."
        },
        {
          id: "ci-cd",
          categoryAliases:["jenkins"],
          label: "Continuous Integration & Deployment",
          description: "Automate the build, test, and deploymeant of your application with each new code revision."
        },
        {
          id: "datastore",
          categoryAliases: ["database","datagrid"],
          label: "Data Stores",
          description: "Store and manage collections of data."
        },
        {
          id: "messaging",
          label: "Messaging",
          description: "Facilitate communication between applications and distributed processes with a messaging server."
        },
        {
          id: "integration",
          label: "Integration",
          description: "Connect with other applications and data to enhance functionality without duplication."
        },
        {
          id: "single-sign-on",
          categoryAliases: ["sso"],
          label: "Single Sign-On",
          description: "A centralized authentication server for users to log in, log out, register, and manage user accounts for applications and RESTful web services."
        },
        {
          id: "",
          label: "Uncategorized",
          description: ""
        }
      ]
    }
  ]
};
