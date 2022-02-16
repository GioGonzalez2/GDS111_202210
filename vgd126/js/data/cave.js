var x=false;
var caveData ={
	info:{
		layout:[
			[0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2],
			[2,8,1,8,1,1,8,1,1,1,1,1,1,8,8,1,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
			[2,x,x,7,x,x,7,x,x,x,x,x,x,7,7,x,1,1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
			[6,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
			[6,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
			[5,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
			[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2]
			
			
		],
		src:`images/cave.png`,
	},
	states:
	[		
			{
				fps:5,
				cycle:false,
				frames:[
					{width:16, height:16, startX:0, startY:0}
				]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:16, height:16, startX:16, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:16, height:16, startX:32, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:16, height:16, startX:48, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:16, height:16, startX:64, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:16, height:16, startX:80, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:16, height:16, startX:96, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:16, height:16, startX:112, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:16, height:16, startX:128, startY:0}]
			}
		]
	}
	var caveBackData ={
		info:{
			layout:[
			[0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
			[x,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
			[x,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
			[x,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
			[5,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
			[5,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
			[5,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
			],
			src:`images/cave.png`,
		},
		states:
		[		
				{
					fps:5,
					cycle:true,
					frames:[
						{width:16, height:16, startX:0, startY:0}
	
					]
				},
				{
					fps:1,
					cycle:false,
					frames:[{width:16, height:16, startX:16, startY:0}]
				},
				{
					fps:1,
					cycle:false,
					frames:[{width:16, height:16, startX:32, startY:0}]
				},
				{
					fps:1,
					cycle:false,
					frames:[{width:16, height:16, startX:48, startY:0}]
				},
				{
					fps:1,
					cycle:false,
					frames:[{width:16, height:16, startX:64, startY:0}]
				},
				{
					fps:1,
					cycle:false,
					frames:[{width:16, height:16, startX:80, startY:0}]
				},
				{
					fps:1,
					cycle:false,
					frames:[{width:16, height:16, startX:96, startY:0}]
				},
				{
					fps:1,
					cycle:false,
					frames:[{width:16, height:16, startX:112, startY:0}]
				},
				{
					fps:1,
					cycle:false,
					frames:[{width:16, height:16, startX:128, startY:0}]
				}
			]
		}

		var caveHitData={
			info:{
				layout:[
					[0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,2],
					[2,8,1,8,1,1,8,1,1,1,1,1,1,8,8,1,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
					[2,x,x,7,x,x,7,x,x,x,x,x,x,7,7,x,1,1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[6,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[6,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2]
					
					
				],
				src:`images/cave.png`,
			},
			states:
			[		
					{
						fps:5,
						cycle:false,
						frames:[
							{width:16, height:16, startX:0, startY:0}
						]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:16, height:16, startX:16, startY:0}]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:16, height:16, startX:32, startY:0}]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:16, height:16, startX:48, startY:0}]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:16, height:16, startX:64, startY:0}]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:16, height:16, startX:80, startY:0}]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:16, height:16, startX:96, startY:0}]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:16, height:16, startX:112, startY:0}]
					},
					{
						fps:1,
						cycle:false,
						frames:[{width:16, height:16, startX:128, startY:0}]
					}
				]
			}