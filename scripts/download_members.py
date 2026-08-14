"""Download member photos from ITLA virtual classroom."""
import os
import urllib.request
import urllib.error
from concurrent.futures import ThreadPoolExecutor, as_completed

BASE_DIR = r"C:\Users\Adrian\Desktop\Desktop_Cleanup\Programming\EPC\src\assets\members"
BASE_URL = "https://aulavirtual.itla.edu.do/pluginfile.php"

MEMBERS = [
    ("alex-acosta.jpg",          5808,  11115273),
    ("susana-aquino.jpg",        231546, 11760886),
    ("yarot-bocio.jpg",          97353,  9494673),
    ("vianny-campechano.jpg",    97318,  9694233),
    ("brahian-ceballos.jpg",     97788,  9440605),
    ("melvis-comas.jpg",         7890,   818013),
    ("wailys-de-la-cruz.jpg",    97296,  9633025),
    ("julio-de-moya.jpg",        232080, 9398803),
    ("isaias-german.jpg",        97801,  9476241),
    ("angel-lopez.jpg",          97912,  5974056),
    ("luis-mendez.jpg",          97135,  9400081),
    ("samantha-mendoza.jpg",     7905,   9433370),
    ("jose-montilla.jpg",        7683,   9477461),
    ("heidy-moronta.jpg",        97795,  9399285),
    ("luis-navarro.jpg",         5804,   9767363),
    ("diego-paulino.jpg",        97181,  9410882),
    ("andry-pineiro.jpg",        7896,   16238821),
    ("manuel-puello.jpg",        97193,  9455704),
    ("adrian-ramirez.jpg",       7894,   2381723),
    ("carla-rodriguez.jpg",      97323,  9905304),
    ("ivan-rodriguez.jpg",       97148,  9412677),
    ("diego-rodriguez-mena.jpg", 97203,  9427729),
    ("leonardo-rosado.jpg",      97206,  9408946),
    ("valery-rosario.jpg",       97793,  369459),
    ("nashla-sanchez.jpg",       7910,   309575),
    ("carlos-sanchez.jpg",       5255,   10311071),
    ("carlos-severino.jpg",      97332,  10853321),
    ("hiroshi-tanaka.jpg",       7619,   9830914),
    ("miguel-urbaez.jpg",        97317,  9443276),
    ("yamaicol-urea.jpg",        97165,  356080),
]

# Moodl e requires a User-Agent header for pluginfile.php requests
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                  "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
}


def download_one(filename, user_id, rev):
    url = f"{BASE_URL}/{user_id}/user/icon/boost_itla/f2?rev={rev}"
    dest = os.path.join(BASE_DIR, filename)
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            data = resp.read()
        with open(dest, "wb") as f:
            f.write(data)
        return filename, len(data), None
    except (urllib.error.URLError, urllib.error.HTTPError, OSError) as exc:
        return filename, 0, exc


def main():
    os.makedirs(BASE_DIR, exist_ok=True)
    print(f"Downloading {len(MEMBERS)} photos to {BASE_DIR}\n")

    ok = 0
    fail = []
    with ThreadPoolExecutor(max_workers=8) as pool:
        futures = {
            pool.submit(download_one, fn, uid, rev): fn
            for fn, uid, rev in MEMBERS
        }
        for fut in as_completed(futures):
            fn, size, err = fut.result()
            if err:
                fail.append((fn, err))
                print(f"  FAIL  {fn}: {err}")
            else:
                ok += 1
                print(f"  OK    {fn}  ({size} bytes)")

    print(f"\n{ok}/{len(MEMBERS)} photos downloaded successfully")
    if fail:
        print("Failures:")
        for fn, err in fail:
            print(f"  - {fn}: {err}")


if __name__ == "__main__":
    main()
