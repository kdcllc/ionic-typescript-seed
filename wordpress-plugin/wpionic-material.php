<?php
/**
 * Plugin Name: Wp Ionic Materal
 * Plugin URI: https://github.com/karthikax/wpionic-material/
 * Description: Plugin to extend wp-api required by wpionic-material application.
 * Version: 1.0
 * Author: Karthik Bhat
 */


/**
 * Get thumbnail url
 * @param  obj $data    response data
 * @param  obj $post    post object
 * @param  [type] $request [description]
 * 
 * @author https://1fix.io/blog/2015/06/26/adding-fields-wp-rest-api/
 * 
 * @return obj          modified responce data
 */
function wpim_thumbnail_url( $data, $post, $request ) {
	$_data = $data->data;
	$thumbnail_id = get_post_thumbnail_id( $post->ID );
	$thumbnail = wp_get_attachment_image_src( $thumbnail_id );
	$_data['thumbnail_url'] = $thumbnail[0];
	$data->data = $_data;
	return $data;
}

add_filter( 'rest_prepare_post', 'wpim_thumbnail_url', 10, 3 );