'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "88945379beb8d6619b1bf6439c016a21",
".git/config": "154ce44d78da3950557bca7d1d81af8f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e81d95f49d02fe917ed76cce4e41b4eb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e235dc64f900bd3fa68d44718e1a532b",
".git/logs/refs/heads/main": "2893e0cd765cf7314a180b1e8a216aae",
".git/logs/refs/remotes/origin/main": "c3f84f0c9a7a01eb8c5391cb712ec8e8",
".git/objects/00/515f71a6ccfb9e610f01662dbb297c4446de22": "fade88dea9a0572cccdfa6da11e6e49b",
".git/objects/16/385143528f2dd7daf80d0acb46ac6ec0345964": "b68f5f8b75723f8526dc9842e36fe2b4",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/23/55176c9210b2eb42860b7cf776f96dbde9688f": "4ab33a40c76225f0816e5e208c702767",
".git/objects/25/d521e9b4ba8d71d4e0090b734942759f1cea65": "0e833bbf56810c1b5d250dad0843f81b",
".git/objects/2a/40f15a5250b49586b84eacbab8e31d68cb3e27": "c1722eec804bce3e9843bec7d2ff45fe",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2c/0eb11cda559c1baba69feb96127b711820ce7f": "a6efe75f14ca5e799e1ec3cad6bd56d8",
".git/objects/2c/a2f526e7c6b4148c0a3472d2f1ddab0c4bb44d": "30b0c8604794fbce35b4c0a9c0cdb5d7",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/4d/5c78e0384e70a94c8a16226901629687a7a732": "89b919a722ed356aee6a8c5331294731",
".git/objects/50/309c3b3a881f0f5dad6db8799677ee0d235af5": "f31b5248a46337ee9f72ac8bebccae9f",
".git/objects/5a/52c1cb3d48f7b6438d3ce69f24cbc1196391bf": "f8bd92268112fbf73616a741cd5fef70",
".git/objects/5f/bfa063b3b1e069921f43271417d59174bb316d": "a1567a3a350c82f6fdad8eed0ee20a5e",
".git/objects/64/0e5c5a54477e948a7a74e8838f0fde8ad5821c": "9c3d7c5dd82aa764ae340c0752b6af00",
".git/objects/6d/61d5b9709b59861409e3a958ee5cf94ba71065": "95d271ab882176bcc22f18b078602a30",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/605e3a6acaa8ce01004242dad3cf778cef52cf": "9915eb1e700dd2b605ddf35cea87d96f",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/2721f3f26e7fc4e5300e824ef408823c99033f": "e8e3acd84e2d2ab9de589c8c4d413e74",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/99/53468266e0bf18cad3ea0dc95db6f2408b209b": "fabe97345a8b3ec0e94fa5629b1fde2e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/4d99327eabc0f394c74fa52f331466357bd7ef": "f8842f2b957c35f36d3d553537c9534d",
".git/objects/ad/a5301d969a3dea3ec8e8f4cdaadbf9b2f4e278": "3f8695a9f40e00c13baafae23219232a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/9ecbbe3e3235f299dcaa09b1b80be9aeaf12ef": "91aa848aa7dcf2ccac5c904e291dde17",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/e04c4ca3bf1f6f873c996c503edbbcddc89665": "06e3f00ecb6aa20967cab2384dcb02da",
".git/objects/dd/cf76a59a498608a44a1fe7a7d446f50bfc34fa": "93388fe0be92d87cba7fd6ab1b8ac0df",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/858f23339a937f19673bbea2674af547ee0dd6": "8a428e0e11def0a2123fc72a3a9836ea",
".git/objects/ef/e3b6df93ab2435b6f0bd0a1c7b17fd9a3bda49": "90a158499610ae517c97071fe7c6883c",
".git/objects/fa/a538668c645c904080edf81e0a0fe79d891953": "5c912e32b2ff0e8fe1d1a16b117c7b42",
".git/refs/heads/main": "731752ced59cd70b4e21df131cbbaf14",
".git/refs/remotes/origin/main": "731752ced59cd70b4e21df131cbbaf14",
"assets/AssetManifest.json": "a409dfe7392bcba96d6ff9326cd0b81f",
"assets/assets/canip.jpg": "4ac5b9e1e5759ab03a82d2263e0427ef",
"assets/assets/OpenSans-Bold.ttf": "ff615c954fc5485fb3757516721b41ff",
"assets/assets/OpenSans-Light.ttf": "0652ba43f7a92220fbc18a5519fbf2c1",
"assets/assets/OpenSans-Medium.ttf": "7a56b1bba54be9caf32f096d8224a492",
"assets/FontManifest.json": "b0a6177935db4cf44fa2515eeea8cbda",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "8467522d814432bc9e3744157f714205",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "8d40d8a1f7be16961013a141d12b0506",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "804258e0a7cbc7c48452c7681231938d",
"/": "804258e0a7cbc7c48452c7681231938d",
"main.dart.js": "6fa39bcd5305d1b265f03be0ea0dac73",
"manifest.json": "c53ff26a3db13a19586db9ff98fc1a69",
"version.json": "f9dd637a93b15d3f59e23b8d5014d4ac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
