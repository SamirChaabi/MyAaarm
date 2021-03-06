﻿import UnityEngine;
import System;

private var rotationAmount : float = 0.01;
public var burst : GameObject;
static var player : Collider;
private var tempPlayer : Collider;
private var timer : float;

function Awake(){
	transform.Rotate(Vector3(0, 0, 25));
	timer = 15;
}

function Start(){
	player.transform.root.transform.Find("body").GetComponent(PlayerCollider).damageMultiplyer = 2;
}

function Update () {
	if(player != null){
		transform.position = Vector3(player.gameObject.transform.position.x, player.gameObject.transform.position.y+4.5, player.gameObject.transform.position.z+0.5);
		tempPlayer = player;
	}
	else{
		Destroy(this.gameObject);
	}
	rotationAmount += 2;
	transform.Rotate(Vector3(0,rotationAmount*Time.deltaTime,0));
	if(timer <= 0){
		Instantiate(burst, transform.position, Quaternion.identity);
		player.transform.root.transform.Find("body").GetComponent(PlayerCollider).damageMultiplyer = 1;
		Destroy(this.gameObject);
	}
	timer -= Time.deltaTime;
}