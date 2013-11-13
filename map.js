$(document).ready(function() {
	  $('#map').usmap({
	  	  showLabels: false,
	  'stateSpecificHoverStyles': {
	  	  'WEST' : {fill: '#e1ebf4', stroke: '#fff'},
		  'SOUTHEAST' : {fill: '#e1ebe5', stroke: '#fff'},
		  'MIDWEST' : {fill: '#edebcc', stroke: '#fff'},
		  'NORTHEAST' : {fill: '#EDDEBD', stroke: '#fff'}
	  },
	    'stateSpecificStyles': {
	      
		  'WEST' : {fill: '#1D5E75',
		  stroke:'#ffffff'},
		  'SOUTHEAST' : {fill: '#006B3B',
		  stroke:'#ffffff'},
		  'MIDWEST' : {fill: '#A49A00',
		  stroke:'#ffffff'},
		  'NORTHEAST' : {fill: '#DCA728',
		  stroke:'#ffffff'}
		  
	    },	    
	    'mouseoverState': {
	      'HI' : function(event, data) {
	        //return false;
	      }
		  
	    },
		
		 'clickState': {
			'SOUTHEAST' : function(event, data) {
				$(".accordion").accordion({active:2});
				
				$("#map > svg > path").each(function(){
				  $(this).css('fill', '');
				});
				$('#' + data.name).css('fill', '#e1ebe5');
						   $("#southeastpanel").toggleClass("openmapui");					
			},
			
			'NORTHEAST' : function(event, data) {
				$(".accordion").accordion({active:3});
				$("#map > svg > path").each(function(){
					  $(this).css('fill', '');
					});
					$('#' + data.name).css('fill', '#EDDEBD');
						   $("#northeastpanel").toggleClass("openmapui");						
			},
			
			'MIDWEST' : function(event, data) {
				$(".accordion").accordion({active:1});
				
					$("#map > svg > path").each(function(){
					  $(this).css('fill', '');
					});
					$('#' + data.name).css('fill', '#edebcc');	
						   $("#midwestpanel").toggleClass("openmapui");						
			},

			'WEST' : function(event, data) {
				$(".accordion").accordion({active:0});
				
				$("#map > svg > path").each(function(){
				  $(this).css('fill', '');
				});
				$('#' + data.name).css('fill', '#e1ebf4');	
			$("#westpanel").toggleClass("openmapui");					
			}			
		  },
		  
	    
	    'click' : function(event, data) {
	      $('#alert')
	        .text('Click '+data.name+' on map 1')
	        .stop()
	        .css('backgroundColor', '#ff0')
	        .animate({backgroundColor: '#ddd'}, 1000);
	    }
	  });
	  
	  $('#mapie').usmap({
	  	  showLabels: false,
	  'stateSpecificHoverStyles': {
	  	  'WEST' : {fill: '#e1ebf4', stroke: '#fff'},
		  'SOUTHEAST' : {fill: '#e1ebe5', stroke: '#fff'},
		  'MIDWEST' : {fill: '#edebcc', stroke: '#fff'},
		  'NORTHEAST' : {fill: '#EDDEBD', stroke: '#fff'}
	  },
	    'stateSpecificStyles': {
	      
		  'WEST' : {fill: '#1D5E75',
		  stroke:'#ffffff'},
		  'SOUTHEAST' : {fill: '#006B3B',
		  stroke:'#ffffff'},
		  'MIDWEST' : {fill: '#A49A00',
		  stroke:'#ffffff'},
		  'NORTHEAST' : {fill: '#DCA728',
		  stroke:'#ffffff'}
		  
	    },	    
	    'mouseoverState': {
	      'HI' : function(event, data) {
	        //return false;
	      }
		  
	    },
		
		 'clickState': {
			'SOUTHEAST' : function(event, data) {
				$(".accordion").accordion({active:2});
				$('#mapie').hide();
				$('#mapiene').hide();
				$('#mapiewest').hide();
				$('#mapiemw').hide();

				$('#mapiese').show();				
			},
			
			'NORTHEAST' : function(event, data) {
				$(".accordion").accordion({active:3});
						$('#mapie').hide();
						$('#mapiese').hide();
						$('#mapiewest').hide();
						$('#mapiemw').hide();

						$('#mapiene').show();			
			},
			
			'MIDWEST' : function(event, data) {
				$(".accordion").accordion({active:1});
				$('#mapie').hide();
				$('#mapiene').hide();
				$('#mapiewest').hide();
				$('#mapiese').hide();

				$('#mapiemw').show();				
									
			},

			'WEST' : function(event, data) {
				$(".accordion").accordion({active:0});
				$('#mapie').hide();
				$('#mapiene').hide();
				$('#mapiese').hide();
				$('#mapiemw').hide();

				$('#mapiewest').show();
			}			
		  },
		  
	    
	    'click' : function(event, data) {
	      $('#alert')
	        .text('Click '+data.name+' on map 1')
	        .stop()
	        .css('backgroundColor', '#ff0')
	        .animate({backgroundColor: '#ddd'}, 1000);
	    }
	  });
	  
	  $('#mapiewest').usmap({
	  	  showLabels: false,
	  'stateSpecificHoverStyles': {
	  	  'WEST' : {fill: '#e1ebf4', stroke: '#fff'},
		  'SOUTHEAST' : {fill: '#e1ebe5', stroke: '#fff'},
		  'MIDWEST' : {fill: '#edebcc', stroke: '#fff'},
		  'NORTHEAST' : {fill: '#EDDEBD', stroke: '#fff'}
	  },
	    'stateSpecificStyles': {
	      
		  'WEST' : {fill: '#e1ebf4',
		  stroke:'#ffffff'},
		  'SOUTHEAST' : {fill: '#006B3B',
		  stroke:'#ffffff'},
		  'MIDWEST' : {fill: '#A49A00',
		  stroke:'#ffffff'},
		  'NORTHEAST' : {fill: '#DCA728',
		  stroke:'#ffffff'}
		  
	    },	    
	    'mouseoverState': {
	      'HI' : function(event, data) {
	        //return false;
	      }
		  
	    },
		
		 'clickState': {
			'SOUTHEAST' : function(event, data) {
				$(".accordion").accordion({active:2});
				
				$('#mapie').hide();
				$('#mapiene').hide();
				$('#mapiewest').hide();
				$('#mapiemw').hide();

				$('#mapiese').show();			
			},
			
			'NORTHEAST' : function(event, data) {
				$(".accordion").accordion({active:3});
				$('#mapie').hide();
				$('#mapiese').hide();
				$('#mapiewest').hide();
				$('#mapiemw').hide();

				$('#mapiene').show();					
			},
			
			'MIDWEST' : function(event, data) {
				$(".accordion").accordion({active:1});
				$('#mapie').hide();
				$('#mapiene').hide();
				$('#mapiewest').hide();
				$('#mapiese').hide();

				$('#mapiemw').show();
									
			},

			'WEST' : function(event, data) {
				$(".accordion").accordion({active:0});		
					
			}			
		  },
		  
	    
	    'click' : function(event, data) {
	      $('#alert')
	        .text('Click '+data.name+' on map 1')
	        .stop()
	        .css('backgroundColor', '#ff0')
	        .animate({backgroundColor: '#ddd'}, 1000);
	    }
	  });
	  
	  $('#mapiese').usmap({
	  	  showLabels: false,
	  'stateSpecificHoverStyles': {
	  	  'WEST' : {fill: '#e1ebf4', stroke: '#fff'},
		  'SOUTHEAST' : {fill: '#e1ebe5', stroke: '#fff'},
		  'MIDWEST' : {fill: '#edebcc', stroke: '#fff'},
		  'NORTHEAST' : {fill: '#EDDEBD', stroke: '#fff'}
	  },
	    'stateSpecificStyles': {
	      
		  'WEST' : {fill: '#1D5E75',
		  stroke:'#ffffff'},
		  'SOUTHEAST' : {fill: '#e1ebe5',
		  stroke:'#ffffff'},
		  'MIDWEST' : {fill: '#A49A00',
		  stroke:'#ffffff'},
		  'NORTHEAST' : {fill: '#DCA728',
		  stroke:'#ffffff'}
		  
	    },	    
	    'mouseoverState': {
	      'HI' : function(event, data) {
	        //return false;
	      }
		  
	    },
		
		 'clickState': {
			'SOUTHEAST' : function(event, data) {
				$(".accordion").accordion({active:2});
				
								
			},
			
			'NORTHEAST' : function(event, data) {
				$(".accordion").accordion({active:3});
			$('#mapie').hide();
			$('#mapiese').hide();
			$('#mapiewest').hide();
			$('#mapiemw').hide();

			$('#mapiene').show();									
			},
			
			'MIDWEST' : function(event, data) {
				$(".accordion").accordion({active:1});
				$('#mapie').hide();
				$('#mapiene').hide();
				$('#mapiewest').hide();
				$('#mapiese').hide();

				$('#mapiemw').show();				
									
			},

			'WEST' : function(event, data) {
				$(".accordion").accordion({active:0});
				$('#mapie').hide();
				$('#mapiene').hide();
				$('#mapiese').hide();
				$('#mapiemw').hide();

				$('#mapiewest').show();				
								
			}			
		  },
		  
	    
	    'click' : function(event, data) {
	      $('#alert')
	        .text('Click '+data.name+' on map 1')
	        .stop()
	        .css('backgroundColor', '#ff0')
	        .animate({backgroundColor: '#ddd'}, 1000);
	    }
	  });
	  
	  $('#mapiemw').usmap({
	  	  showLabels: false,
	  'stateSpecificHoverStyles': {
	  	  'WEST' : {fill: '#e1ebf4', stroke: '#fff'},
		  'SOUTHEAST' : {fill: '#e1ebe5', stroke: '#fff'},
		  'MIDWEST' : {fill: '#edebcc', stroke: '#fff'},
		  'NORTHEAST' : {fill: '#EDDEBD', stroke: '#fff'}
	  },
	    'stateSpecificStyles': {
	      
		  'WEST' : {fill: '#1D5E75',
		  stroke:'#ffffff'},
		  'SOUTHEAST' : {fill: '#006B3B',
		  stroke:'#ffffff'},
		  'MIDWEST' : {fill: '#edebcc',
		  stroke:'#ffffff'},
		  'NORTHEAST' : {fill: '#DCA728',
		  stroke:'#ffffff'}
		  
	    },	    
	    'mouseoverState': {
	      'HI' : function(event, data) {
	        //return false;
	      }
		  
	    },
		
		 'clickState': {
			'SOUTHEAST' : function(event, data) {
				$(".accordion").accordion({active:2});
				$('#mapie').hide();
				$('#mapiene').hide();
				$('#mapiewest').hide();
				$('#mapiemw').hide();

				$('#mapiese').show();
								
			},
			
			'NORTHEAST' : function(event, data) {
				$(".accordion").accordion({active:3});
				$('#mapie').hide();
				$('#mapiese').hide();
				$('#mapiewest').hide();
				$('#mapiemw').hide();

				$('#mapiene').show();									
			},
			
			'MIDWEST' : function(event, data) {
				$(".accordion").accordion({active:1});
				
										
			},

			'WEST' : function(event, data) {
				$(".accordion").accordion({active:0});
				$('#mapie').hide();
				$('#mapiene').hide();
				$('#mapiese').hide();
				$('#mapiemw').hide();

				$('#mapiewest').show();				
								
			}			
		  },
		  
	    
	    'click' : function(event, data) {
	      $('#alert')
	        .text('Click '+data.name+' on map 1')
	        .stop()
	        .css('backgroundColor', '#ff0')
	        .animate({backgroundColor: '#ddd'}, 1000);
	    }
	  });
	 
	 $('#mapiene').usmap({
	  	  showLabels: false,
	  'stateSpecificHoverStyles': {
	  	  'WEST' : {fill: '#e1ebf4', stroke: '#fff'},
		  'SOUTHEAST' : {fill: '#e1ebe5', stroke: '#fff'},
		  'MIDWEST' : {fill: '#edebcc', stroke: '#fff'},
		  'NORTHEAST' : {fill: '#EDDEBD', stroke: '#fff'}
	  },
	    'stateSpecificStyles': {
	      
		  'WEST' : {fill: '#1D5E75',
		  stroke:'#ffffff'},
		  'SOUTHEAST' : {fill: '#006B3B',
		  stroke:'#ffffff'},
		  'MIDWEST' : {fill: '#A49A00',
		  stroke:'#ffffff'},
		  'NORTHEAST' : {fill: '#EDDEBD',
		  stroke:'#ffffff'}
		  
	    },	    
	    'mouseoverState': {
	      'HI' : function(event, data) {
	        //return false;
	      }
		  
	    },
		
		 'clickState': {
			'SOUTHEAST' : function(event, data) {
				$(".accordion").accordion({active:2});
				$('#mapie').hide();
				$('#mapiene').hide();
				$('#mapiewest').hide();
				$('#mapiemw').hide();

				$('#mapiese').show();				
			},
			
			'NORTHEAST' : function(event, data) {
				$(".accordion").accordion({active:3});
									
			},
			
			'MIDWEST' : function(event, data) {
				$(".accordion").accordion({active:1});
				$('#mapie').hide();
				$('#mapiene').hide();
				$('#mapiewest').hide();
				$('#mapiese').hide();

				$('#mapiemw').show();
										
			},

			'WEST' : function(event, data) {
				$(".accordion").accordion({active:0});
				$('#mapie').hide();
				$('#mapiene').hide();
				$('#mapiese').hide();
				$('#mapiemw').hide();

				$('#mapiewest').show();				
							
			}			
		  },
		  
	    
	    'click' : function(event, data) {
	      $('#alert')
	        .text('Click '+data.name+' on map 1')
	        .stop()
	        .css('backgroundColor', '#ff0')
	        .animate({backgroundColor: '#ddd'}, 1000);
	    }
	  });
	  
	  

	});
