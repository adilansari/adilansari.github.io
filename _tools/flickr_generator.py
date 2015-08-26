import flickrapi
import argparse

api_key = '0118bb423659a68136152aad4564b5a6'
api_secret = '157b8e4cbcee46a8'
map = {
    'Small': 'thumbnail',
    'Large': 'source'
}


def generate_tags(photo_ids):
    flickr = flickrapi.FlickrAPI(api_key, api_secret, format='parsed-json')
    results = []
    for photo_id in photo_ids:
        sizes = flickr.photos.getSizes(photo_id=photo_id)['sizes']['size']
        urls = _filter_required_data(sizes)
        results.append(_markup(urls['source'], urls['thumbnail']))

    for result in results:
        print result


def _filter_required_data(all_sizes):
    filtered_data = {}
    for size_details in all_sizes:
        if size_details['label'] in map.keys():
            key = map[size_details['label']]
            filtered_data[key] = size_details['source']
    return filtered_data


def _markup(src_url, thumb_url, title=''):
    return '<a href="{}" title="{}"><img src="{}"></a>'.format(src_url, title, thumb_url)


def _parse_args():
    parser = argparse.ArgumentParser(description='Process flickr ids.')
    parser.add_argument('--ids', type=int, nargs='+', action='store', dest='photo_ids', required=True, help='--ids 123 124 125 126')
    args = parser.parse_args()
    return args.photo_ids

if __name__ == '__main__':
    photo_ids = _parse_args()
    tags = generate_tags(photo_ids)
