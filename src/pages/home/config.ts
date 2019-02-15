export const AppConfig = {
	version: "BUILD_NUMBER",
	appQualifier: "org.ekstep.genieservices",
	processing_timeout: 10, // in minutes
	host: "",
	canvasVersion: "genie-canvas-version",
	recorder: "AUDIO_RECORDER",
	flavor: "DEPLOYMENT",
	heartBeatTime: 180000,
	isCorePluginsPackaged: false, // Default to TRUE, For local development turn off this flag.
	s3ContentHost: "/assets/public/content/",
	previewPluginspath: "/content-plugins",
	devicePluginspath: "/widgets/content-plugins",
	corePluginspath: "coreplugins",
	apislug: "/action",
	telemetryEventsConfigFields: ["env", "sid", "uid", "did", "channel", "etags", "pdata", "cdata", "app", "dims", "partner", "tags", "rollup", "mode", "enableTelemetryValidation"],
	mimetypes: [
		"application/vnd.ekstep.ecml-archive", "application/vnd.ekstep.html-archive", "application/vnd.ekstep.h5p-archive", "application/epub", "video/mp4", "application/pdf", "video/x-youtube", "video/webm"
	],
	whiteListUrl: [
		'self',
		'https://*.blob.core.windows.net/**',
		'https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/**'
	],
	defaultMetadata: {
		"identifier": "org.ekstep.videorenderer",
		"mimeType": "video/webm",
		"contentData": {
			"questionnaire": null,
			"appIcon": "stories/pratham-camal/logo.png",
			"subject": "literacy_v2",
			"description": "pratham-camal",
			"name": "Video-Renderer",
			"downloadUrl": "cat.mp4",
			"artifactUrl":"cat.mp4",
			"checksum": null,
			"loadingMessage": "Without requirements or design, programming is the art of adding bugs to an empty text file. ...",
			"concepts": [{
				"identifier": "LO1",
				"name": "Receptive Vocabulary",
				"objectType": "Concept"
			}],
			"identifier": "org.ekstep.videorenderer",
			"grayScaleAppIcon": null,
			"pkgVersion": 1
		},
		"isAvailable": true,
		"path": "fixture-stories/video-renderer"
	},
	contentLaunchers: [{
		mimeType: ["application/vnd.ekstep.html-archive", "application/vnd.ekstep.h5p-archive"],
		id: "org.ekstep.htmlrenderer",
		ver: 1.0,
		type: "plugin"
	}, {
		mimeType: ["application/vnd.ekstep.ecml-archive"],
		id: "org.ekstep.ecmlrenderer",
		ver: 1.0,
		type: "plugin"
	},
	{
		mimeType: ["application/epub"],
		id: "org.ekstep.epubrenderer",
		ver: 1.0,
		type: "plugin"
	},
	{
		mimeType: ["video/mp4", "video/x-youtube", "video/webm"],
		id: "org.ekstep.videorenderer",
		ver: 1.1,
		type: "plugin"
	},
	{
		mimeType: ["application/pdf"],
		id: "org.ekstep.pdfrenderer",
		ver: 1.0,
		type: "plugin"
	},
	{
		mimeType: ["text/x-url"],
		id: "org.ekstep.extcontentpreview",
		ver: 1.0,
		type: "plugin"
	}

	],
	assetbase: "assets/icons/",
	defaultPlugins: [{
		id: "org.ekstep.launcher",
		ver: 1.0,
		type: "plugin"
	}, {
		id: "org.ekstep.repo",
		ver: 1.0,
		type: "plugin"
	}, {
		id: "org.ekstep.telemetrysync",
		ver: 1.0,
		type: "plugin"
	}, {
		id: "org.ekstep.toaster",
		ver: 1.0,
		type: "plugin"
	}, {
		id: "org.ekstep.alert",
		ver: 1.0,
		type: "plugin"
	}, {
		id: "org.sunbird.player.userswitcher",
		ver: 1.0,
		type: "plugin"
	},
	{
		id: "org.sunbird.player.endpage",
		ver: 1.1,
		type: "plugin"
	}],
	overlay: {
		enableUserSwitcher: false,
		showUser: false,
		showOverlay: true,
		showNext: true,
		showPrevious: true,
		showSubmit: false,
		showReload: true,
		showContentClose: false,
		menu: {
			showTeachersInstruction: true
		}
	},
	splash: {
		text: "Powered by EkStep",
		icon: "assets/icons/icn_genie.png",
		bgImage: "assets/icons/background_1.png",
		webLink: "https://www.ekstep.in"
	},
	showEndPage: false,
	env: "contentplayer",
	pdata: { "id": "in.ekstep", "ver": "1.0", "pid": "contentplayer" },
	channel: "in.ekstep",
	etags: {
		app: [],
		partner: [],
		dims: []
	},
	tags: [],
	context: {},
	rollup: {},
	config: {}
}


export const customConfig = {
	"config": {
	  "version": "BUILD_NUMBER",
	  "processing_timeout": 10,
	  "host": "https://staging.ntp.net.in",
	  "canvasVersion": "genie-canvas-version",
	  "recorder": "AUDIO_RECORDER",
	  "flavor": "DEPLOYMENT",
	  "heartBeatTime": 180000,
	  "isCorePluginsPackaged": true,
	  "s3ContentHost": "/assets/public/content/",	
	  "previewPluginspath": "/content-plugins",
	  "devicePluginspath": "/widgets/content-plugins",
	  "corePluginspath": "coreplugins",
	  "apislug": "/action",
	  "telemetryEventsConfigFields": [
		"env",
		"sid",
		"uid",
		"did",
		"channel",
		"etags",
		"pdata",
		"cdata",
		"app",
		"dims",
		"partner",
		"tags",
		"rollup",
		"mode",
		"enableTelemetryValidation"
	  ],
	  "configFields": [
		"origin",
		"contentId",
		"appInfo",
		"languageInfo",
		"contentExtras",
		"appQualifier",
		"mode",
		"env",
		"sid",
		"uid",
		"did",
		"channel",
		"etags",
		"tags",
		"rollup",
		"pdata",
		"cdata",
		"contentLaunchers",
		"overlay",
		"splash",
		"showEndPage",
		"app",
		"dims",
		"partner"
	  ],
	  "mimetypes": [
		"application/vnd.ekstep.ecml-archive",
		"application/vnd.ekstep.html-archive",
		"application/vnd.ekstep.h5p-archive",
		"application/epub",
		"video/mp4",
		"application/pdf",
		"video/x-youtube",
		"video/webm"
	  ],
	  "whiteListUrl": [
		"self",
		"https://*.blob.core.windows.net/**",
		"https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/**"
	  ],
	  "defaultMetadata": {
		"identifier": "org.ekstep.item.sample",
		"mimeType": "application/vnd.ekstep.ecml-archive",
		"name": "Content Preview ",
		"author": "EkStep",
		"localData": {
		  "name": "Content Preview ",
		  "loadingMessage": "Without requirements or design, programming is the art of adding bugs to an empty text file. ...",
		  "identifier": "org.ekstep.item.sample",
		  "pkgVersion": 1
		},
		"isAvailable": true,
		"path": ""
	  },
	  "contentLaunchers": [
		{
		  "mimeType": [
			"application/vnd.ekstep.html-archive",
			"application/vnd.ekstep.h5p-archive"
		  ],
		  "id": "org.ekstep.htmlrenderer",
		  "ver": "1.0",
		  "type": "plugin"
		},
		{
		  "mimeType": [
			"application/vnd.ekstep.ecml-archive"
		  ],
		  "id": "org.ekstep.ecmlrenderer",
		  "ver": "1.0",
		  "type": "plugin"
		},
		{
		  "mimeType": [
			"application/epub"
		  ],
		  "id": "org.ekstep.epubrenderer",
		  "ver": "1.0",
		  "type": "plugin"
		},
		{
		  "mimeType": [
			"video/mp4",
			"video/x-youtube",
			"video/webm"
		  ],
		  "id": "org.ekstep.videorenderer",
		  "ver": "1.1",
		  "type": "plugin"
		},
		{
		  "mimeType": [
			"application/pdf"
		  ],
		  "id": "org.ekstep.pdfrenderer",
		  "ver": "1.0",
		  "type": "plugin"
		},
		{
		  "mimeType": [
			"text/x-url"
		  ],
		  "id": "org.ekstep.extcontentpreview",
		  "ver": "1.0",
		  "type": "plugin"
		},
		{
		  "id": "org.ekstep.overlay",
		  "ver": "1.0",
		  "type": "plugin"
		}
	  ],
	  "assetbase": "assets/icons/",
	  "defaultPlugins": [
		{
		  "id": "org.ekstep.launcher",
		  "ver": "1.0",
		  "type": "plugin"
		},
		{
		  "id": "org.ekstep.repo",
		  "ver": "1.0",
		  "type": "plugin"
		},
		{
		  "id": "org.ekstep.telemetrysync",
		  "ver": "1.0",
		  "type": "plugin"
		},
		{
		  "id": "org.ekstep.toaster",
		  "ver": "1.0",
		  "type": "plugin"
		},
		{
		  "id": "org.ekstep.alert",
		  "ver": "1.0",
		  "type": "plugin"
		},
		{
		  "id": "org.sunbird.player.endpage",
		  "ver": "1.1",
		  "type": "plugin"
		},
		{
		  "id": "org.sunbird.player.userswitcher",
		  "ver": "1.0",
		  "type": "plugin"
		}
	  ],
	  "overlay": {
		"enableUserSwitcher": false,
		"showUser": false,
		"showOverlay": true,
		"showNext": true,
		"showPrevious": true,
		"showSubmit": false,
		"showReload": true,
		"showContentClose": false,
		"menu": {
		  "showTeachersInstruction": true
		}
	  },
	  "splash": {
		"text": "",
		"icon": "",
		"bgImage": "assets/icons/splacebackground_1.png",
		"webLink": ""
	  },
	  "showEndPage": false,
	  "env": "contentplayer",
	  "pdata": {
		"id": "staging.diksha.app",
		"ver": "2.0.localstaging-debug",
		"pid": "sunbird.app.contentplayer"
	  },
	  "channel": "505c7c48ac6dc1edc9b08f21db5a571d",
	  "etags": {
		"app": [],
		"partner": [],
		"dims": []
	  },
	  "tags": [],
	  "context": {
		"pdata": {
		  "id": "staging.diksha.app",
		  "ver": "2.0.localstaging-debug",
		  "pid": "sunbird.app.contentplayer"
		},
		"contentId": "do_21252320203195187213513",
		"did": "afeb38bdb54b6784bbd2015622c52a37e5715988",
		"languageInfo": "",
		"origin": "Genie",
		"deeplinkBasePath": "staging.ntp.net.in://",
		"actor": {
		  "type": "User",
		  "id": "da9096e1-f94e-4e4a-b9d0-6d7c023d1eae"
		},
		"basePath": "/storage/emulated/0/Android/data/org.sunbird.app.staging/files/content/do_21252320203195187213513",
		"appQualifier": "org.sunbird.app.staging",
		"sid": "9b6da19d-a004-428c-888c-4ed8260ed7bb",
		"mode": "play",
		"tags": [],
		"channel": "505c7c48ac6dc1edc9b08f21db5a571d",
		"cdata": [
		  {
			"id": "offline",
			"type": "PlayerLaunch"
		  }
		]
	  },
	  "rollup": {
		"l1": "do_21255778867456409611370",
		"l2": "do_21255778887847936011371",
		"l3": "do_2125550953500180481990",
		"l4": "do_2125238150207242241110"
	  },
	  "config": {
		"splash": {
		  "text": "",
		  "icon": "",
		  "webLink": ""
		},
		"showEndPage": false,
		"overlay": {
		  "enableUserSwitcher": false,
		  "showUser": false
		},
		"repos": "/widgets/content-plugins"
	  },
	  "metadata": {
		"appIcon": "do_21252320203195187213513/1411988.large_1518948673728.jpg",
		"artifactUrl": "do_21252320203195187213513/1528712589812_do_21252320203195187213513.zip",
		"audience": [
		  "Learner"
		],
		"board": "NCERT",
		"channel": "012315809814749184151",
		"contentDisposition": "inline",
		"contentEncoding": "gzip",
		"contentType": "Resource",
		"createdBy": "659b011a-06ec-4107-84ad-955e16b0a48a",
		"createdOn": "2018-06-11T09:59:45.541+0000",
		"creator": "sunbird 12367890 creator 1456",
		"description": "Untitled Collection",
		"downloadUrl": "do_21252320203195187213513/1528712589812_do_21252320203195187213513.zip",
		"framework": "NCF",
		"gradeLevel": [
		  "KG"
		],
		"identifier": "do_21252320203195187213513",
		"language": [
		  "English"
		],
		"lastPublishedOn": "2018-06-11T10:23:10.116+0000",
		"medium": "English",
		"mimeType": "application/vnd.ekstep.ecml-archive",
		"name": "Test Collection 1234567890",
		"osId": "org.ekstep.quiz.app",
		"pkgVersion": "1.0",
		"previewUrl": "/storage/emulated/0/Android/data/org.sunbird.app.staging/files/content/do_21252320203195187213513",
		"resourceType": "Learn",
		"status": "Live",
		"streamingUrl": "/storage/emulated/0/Android/data/org.sunbird.app.staging/files/content/do_21252320203195187213513",
		"subject": "Mathematics",
		"versionKey": "1528712588469",
		"hierarchyInfo": [
		  {
			"contentType": "textbook",
			"identifier": "do_21255778867456409611370"
		  },
		  {
			"contentType": "textbookunit",
			"identifier": "do_21255778887847936011371"
		  },
		  {
			"contentType": "collection",
			"identifier": "do_2125550953500180481990"
		  },
		  {
			"contentType": "collection",
			"identifier": "do_2125238150207242241110"
		  },
		  {
			"contentType": "collection",
			"identifier": "do_212523771644067840146"
		  }
		],
		"isAvailableLocally": true,
		"basePath": "/storage/emulated/0/Android/data/org.sunbird.app.staging/files/content/do_21252320203195187213513",
		"rollup": {
		  "l1": "do_21255778867456409611370",
		  "l2": "do_21255778887847936011371",
		  "l3": "do_2125550953500180481990",
		  "l4": "do_2125238150207242241110"
		},
		"basepath": "/storage/emulated/0/Android/data/org.sunbird.app.staging/files/content/do_21252320203195187213513"
	  },
	  "appContext": {
		"server": false,
		"local": true
	  },
	  "contentId": "do_21252320203195187213513",
	  "did": "afeb38bdb54b6784bbd2015622c52a37e5715988",
	  "languageInfo": "",
	  "origin": "Genie",
	  "deeplinkBasePath": "staging.ntp.net.in://",
	  "actor": {
		"type": "User",
		"id": "da9096e1-f94e-4e4a-b9d0-6d7c023d1eae"
	  },
	  "basePath": "/storage/emulated/0/Android/data/org.sunbird.app.staging/files/content/do_21252320203195187213513",
	  "appQualifier": "org.sunbird.app.staging",
	  "sid": "9b6da19d-a004-428c-888c-4ed8260ed7bb",
	  "mode": "play",
	  "cdata": [
		{
		  "id": "offline",
		  "type": "PlayerLaunch"
		}
	  ],
	  "basepath": "/storage/emulated/0/Android/data/org.sunbird.app.staging/files/content/do_21252320203195187213513",
	  "otherData": {
		"env": "contentplayer",
		"sid": "9b6da19d-a004-428c-888c-4ed8260ed7bb",
		"did": "afeb38bdb54b6784bbd2015622c52a37e5715988",
		"channel": "505c7c48ac6dc1edc9b08f21db5a571d",
		"etags": {
		  "dims": [],
		  "app": [],
		  "partner": []
		},
		"pdata": {
		  "id": "staging.diksha.app",
		  "ver": "2.0.localstaging-debug",
		  "pid": "sunbird.app.contentplayer"
		},
		"tags": [],
		"rollup": {
		  "l1": "do_21255778867456409611370",
		  "l2": "do_21255778887847936011371",
		  "l3": "do_2125550953500180481990",
		  "l4": "do_2125238150207242241110"
		},
		"mode": "play",
		"cdata": [
		  {
			"id": "offline",
			"type": "PlayerLaunch"
		  },
		  {
			"id": "eb407f44ef6a1c9238046bc0e7e44361",
			"type": "ContentSession"
		  }
		],
		"uid": "da9096e1-f94e-4e4a-b9d0-6d7c023d1eae",
		"object": {
		  "id": "do_21252320203195187213513",
		  "type": "Content",
		  "ver": "1.0"
		},
		"dispatcher": {},
		"batchsize": 20
	  }
	},
	"metadata": {
	  "appIcon": "do_21252167235164569613089/127-600x450_1524146730751.thumb.jpg",
	  "artifactUrl": "https://www.youtube.com/watch?v=ZmtLzRJh8n8",
	  "audience": [
		"Learner"
	  ],
	  "board": "MSCERT",
	  "channel": "012315809814749184151",
	  "contentDisposition": "online",
	  "contentEncoding": "identity",
	  "contentType": "Resource",
	  "createdBy": "659b011a-06ec-4107-84ad-955e16b0a48a",
	  "createdOn": "2018-06-09T06:07:36.986+0000",
	  "creator": "sunbird  creator 1",
	  "downloadUrl": "https://www.youtube.com/watch?v=ZmtLzRJh8n8",
	  "framework": "FWATMPT1",
	  "gradeLevel": [
		"Grade 4"
	  ],
	  "identifier": "do_21252167235164569613089",
	  "language": [
		"English"
	  ],
	  "lastPublishedOn": "2018-10-03T09:19:16.307+0000",
	  "license": "Standard YouTube License",
	  "medium": "English",
	  "mimeType": "video/x-youtube",
	  "name": "youtube123",
	  "osId": "org.ekstep.quiz.app",
	  "pkgVersion": "4.0",
	  "pragma": [
		"external"
	  ],
	  "previewUrl": "https://www.youtube.com/watch?v=ZmtLzRJh8n8",
	  "resourceType": "Learn",
	  "size": "36571.0",
	  "status": "Live",
	  "subject": "Mathematics",
	  "variants": {
		"spine": {
		  "ecarUrl": "https://ekstep-public-qa.s3-ap-south-1.amazonaws.com/ecar_files/do_21252167235164569613089/youtube123_1538558356398_do_21252167235164569613089_4.0_spine.ecar",
		  "size": 36571
		}
	  },
	  "versionKey": "1538558354142",
	  "hierarchyInfo": [
		{
		  "contentType": "textbook",
		  "identifier": "do_21255778867456409611370"
		},
		{
		  "contentType": "textbookunit",
		  "identifier": "do_21255778887847936011371"
		},
		{
		  "contentType": "collection",
		  "identifier": "do_2125550953500180481990"
		},
		{
		  "contentType": "collection",
		  "identifier": "do_2125238150207242241110"
		},
		{
		  "contentType": "collection",
		  "identifier": "do_212523771644067840146"
		}
	  ],
	  "isAvailableLocally": true,
	  "basePath": "/storage/emulated/0/Android/data/org.sunbird.app.staging/files/content/do_21252167235164569613089",
	  "rollup": {
		"l1": "do_21255778867456409611370",
		"l2": "do_21255778887847936011371",
		"l3": "do_2125550953500180481990",
		"l4": "do_2125238150207242241110"
	  },
	  "basepath": "/storage/emulated/0/Android/data/org.sunbird.app.staging/files/content/do_21252167235164569613089"
	}
  }