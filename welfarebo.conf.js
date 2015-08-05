/*
 * Map configuration
 * Go to the end of the file for options metadata
 */

var mapConfig = {

    // Debug mode activation with logs in console
    debug: false,

    language: 'it',

    // URL shortener service configuration (via yourls)
    urlShortener: {

        // Enable or not
        active: false,

        // Domain without trailing slash (only for remote file)
        domain: '', 
            
        /* Relative or absolute path (ie. [prepath]/yourls-api.php)
         * See http://yourls.org/#API
         */
        path: '/api/dtnj/yourls-api.php',

        // Signature, see https://github.com/YOURLS/YOURLS/wiki/PasswordlessAPI
        signature: 'efe758b8d3',

        // If prefix is not empty, short url will be [prefix]+md5([long url])
        prefix: 'welfarebo-',
            
        // URL generator based on region and a filter
        url: function() {
            return this.domain + this.path;
        }
    },

    // General options for Leaflet map, see http://leafletjs.com/reference.html#map-options
    map: {

        // Bounds of map, see http://leafletjs.com/reference.html#latlngbounds
        bounds: {

            // Map position on loading
            init: {

                // Bottom-left corner
                southWest: {
                    lat: 44.40,
                    lng: 11.21
                },

                // Top-right corner
                northEast: {
                    lat: 44.57,
                    lng: 11.45
                },
            },

            // Max bounds allowed to user
            max: {

                // Bottom-left corner
                southWest: {
                    lat: 44,
                    lng: 11
                },

                // Top-right corner
                northEast: {
                    lat: 45,
                    lng: 12
                },
            }
        },

        // Zoom options
        zoom: {
            init: 12,
            max: 13,
            min: 11,
            scrollWheel: true
        },

        // Center of the map
        /*center: {
            lat: 43,
            lng: 9
        },*/

        /* Attribution line, see http://leafletjs.com/reference.html#control-attribution
         * Set a string item per service
         */
        attribution: [
            'Powered by <a href="http://www.dataninja.it/" target="_blank">Dataninja</a>',
            'tileset from <a href="http://www.geoiq.com/" target="_blank">GeoIQ</a>',
            'icons from <a href="http://www.flaticon.com/" target="_blank">Freepik</a> and <a href="http://www.simplesharebuttons.com/" target="_blank">Simple Share Buttons</a>',
            //'geocoding by <a href="http://wiki.openstreetmap.org/wiki/Nominatim" target="_blank">OSM Nominatim</a>',
            'code on <a href="https://github.com/Dataninja/advanced-mapping-tool" target="_blank">GitHub</a>.'
        ]
    },

    // Label control on mouse over regions in vectorial geolayers
    tooltip: {

        // Enable or not
        active: true,

        /* Default label has this structure:
         * [REGION NAME]
         * [text]: [value]
         */
        text: 'Persone assistite'
    },

    // Legend control
    legend: {

        // Enable or not
        active: true,

        // Title at the top of the control
        title: 'Legenda',

        // Description at the bottom
        description: 'Persone assistite nell\'ambito dei PAI',
        delimiter: '-',

        // Label appended to legend items
        label: function(min,max,label) {
            var label = (label ? label+": " : "");
            return label + min + (min != max ? " "+this.delimiter+" "+max : "");
        }
    },

    menu: {
        maxItems: 3
    },

    // External div for long text description
    summary: {

        // Enable or not
        active: true,

        // Position respect to map
        position: 'right',

        // Control image to open / close summary
        image: 'icons/info.png',

        // Title on control mouseover
        title: 'Informazioni generali',

        // Initial status (can be overwritten by 'summary' get parameter)
        closed: true,

        // HTML content of the description 
        content: '<h2>Open Welfare</h2>' + 
            '<p>Open Welfare intende facilitare l\'incontro tra Amministrazione e Cittadini attraverso la <strong>trasparenza</strong>, la <strong>condivisione</strong> e l\'incoraggiamento al <strong>riutilizzo</strong> delle informazioni pubbliche.</p> <p>Uno strumento di <u><em>accountability</em></u> che vuole “rendere conto” - a consuntivo - delle prestazioni sociali, sanitarie e socio-sanitarie erogate. Al fine di incoraggiare nuove forme di collaborazione o sperimentare nuovi percorsi di coesione sociale con tutti gli stakeholders.</p>' +
            '<p>La mappa, nel pieno rispetto del principio della riservatezza e di salvaguardia della <em>privacy</em> delle parti in causa, si basa su tre distinti dataset:</p>' + 
            '<p></p>' + 
            '<ul>' + 
            '<li><a href="http://dati.comune.bologna.it/node/1324" target="_blank">Sportelli sociali</a> - il resoconto delle attività svolte dagli Sportelli Sociali di quartiere (la porta unitaria territoriale di accesso alle informazioni e al Servizio sociale);</li>' + 
            '<li><a href="http://dati.comune.bologna.it/node/1323" target="_blank">Programma Assistenziale Individializzato (PAI)</a> - il dettaglio dei piani di assistenza individualizzata attivati nell’anno;</li>' + 
            '<li><a href="http://dati.comune.bologna.it/node/1325" target="_blank">Interventi</a> - il totale delle prestazioni e degli interventi erogati.</li>' + 
            '</ul>' +
            '<p>Le informazioni di Open Welfare provengono dalla banca dati del “Sistema informativo di gestione degli interventi e servizi sociali e socio-sanitari” (Garsia/Sosia); l\'applicativo gestionale in uso presso tutti i Comuni della Provincia di Bologna e presso l\'AUSL.</p>' + 
            '<p>L\'auspicio è che i dati esposti possano diventare una base di riferimento quantitativa; in cui cittadini, studiosi, data journalist, soggetti del terzo settore, mondo imprenditoriale ed altri portatori d\'interesse abbiano l\'opportunità di accedervi e di arricchire con l\'interpretazione o anche con l\'integrazione di altri set di dati.</p>' +  
            '<p>Se hai idee, proposte, suggerimenti o semplicemente per saperne di più del progetto Open Welfare Bologna <a href="http://dati.comune.bologna.it/node/15" target="_blank">SCRIVICI.</a></p>'

    },

    // Definition of geographic layers to load
    geoLayers: [
        {

            // Inherits attributes from geoType named here
            type: 'tile',
            source: 'tileserver',
            domain: 'http://{s}.acetate.geoiq.com',
            path: '/tiles/acetate-bg/{z}/{x}/{y}.png'
        },
        {

            // Inherits attributes from geoSource named here
            source: 'file',
            path: 'geo/',
            filename: 'quartieri_bologna.json',
            
            // Inherits attributes from geoType named here
            type: 'thematic',

            schema: {

                // Key name of layer
                name: 'quartieri',

                // Menu label for layer entry
                menu: 'Quartieri',

                // Key of id values used for join
                id: 'NUMQUART',

                // Key of label values used for label
                label: 'NOMEQUART'
            }
        }
    ],

    // Definition of data sets to load
    dataSets: [
        {
            
            // Inherits attributes from dataSource named here
            source: 'file',
            path: 'data/',
            filename: 'WelfareBO-Interventi2014 - Quartieri dei servizi.tsv',
            format: 'tsv',

            // Inherits attributes from geoType named here
            type: 'choropleth', // from dataTypes attributes
            bins: 7,
            precision: 10,
            palette: 'Blues',
            
            formatter: function(k,v) {
                if (k.indexOf('per residente') > -1 || k.indexOf('sul totale') > -1) {
                    return ',.1%';
                } else {
                    return '';
                }
            },
            
            schema: {
                
                // Key name of dataset
                name: 'interventi-servizio',

                // Menu label for layer entry
                label: 'Interventi',

                // Key name of layer data refer to
                layer: 'quartieri',

                // Key of id values used for join
                id: 'Id',
                
                // Legend description
                description: 'Interventi per quartiere che ha in gestione il caso.',

                // Keys of data values shown on map on loading
                menu: [
                    {
                        column: 'Interventi per residente',
                        description: 'Numero di interventi per 100 abitanti del quartiere.',
                        precision: 0.001
                    },
                    {
                        column: 'Numero interventi totale'
                    },
                    {
                        column: 'Uomini'
                    },
                    {
                        column: 'Donne'
                    },
                    {
                        column: 'Anziani'
                    },
                    {
                        column: 'Disagio adulto'
                    },
                    {
                        column: 'Famiglia e Minori'
                    },
                    {
                        column: 'Italiana'
                    },
                    {
                        column: 'Straniera'
                    }
                ]
            },

            // Columns aggregation
            groups: {
                'Genere': ['Donne', 'Uomini'],
                'Target d\'utenza': ['Anziani', 'Disagio adulto', 'Famiglia e Minori'],
                'Cittadinanza': ['Italiana', 'Straniera'],
                'Fascia d\'età': ['0-3', '4-7', '8-10', '11-14', '15-17', '18-25', '26-35', '36-50', '51-64', '>=65'],
                'Bisogno': ['Contributi economici', 'Educativo assistenziale e supporto inserimento lavorativo', 'Integrazione sociale', 'Interventi domiciliari e per la domiciliarità', 'Prevenzione', 'Pronto intervento sociale', 'Segretariato sociale', 'Servizi integrativi di supporto', 'Strutture residenziali', 'Strutture semi-residenziali', 'Supporto a persona e famiglia']
            },

            // Custom parse function name from string to number
            // If missing, 'parseFloat' is the default
            // You can also define a custom function (el) { return el; }
            parse: function(k,v) {
                if (k.indexOf('per residente') > -1 || k.indexOf('sul totale') > -1) {
                    return parseFloat(v.replace(",","."));
                } else {
                    return parseInt(v) || v;
                }
            }
        },
        {
            
            // Inherits attributes from dataSource named here
            source: 'file',
            path: 'data/',
            filename: 'WelfareBO-Sportelli-sociali-2014 - Quartiere del nodo.tsv',
            format: 'tsv',

            // Inherits attributes from geoType named here
            type: 'choropleth', // from dataTypes attributes
            bins: 7,
            precision: 10,
            palette: 'Greens',
            
            formatter: function(k,v) {
                if (k.indexOf('per residente') > -1 || k.indexOf('sul totale') > -1) {
                    return ',.1%';
                } else {
                    return '';
                }
            },
            
            schema: {
                
                // Key name of dataset
                name: 'sportelli-nodo',

                // Menu label for layer entry
                label: 'Sportelli Sociali',

                // Key name of layer data refer to
                layer: 'quartieri',

                // Key of id values used for join
                id: 'Id',
                
                // Legend description
                description: 'Contatti gestiti dagli Sportelli Sociali',

                // Keys of data values shown on map on loading
                menu: [
                    {
                        column: 'Contatti per residente',
                        description: 'Numero di contatti per 100 abitanti del quartiere.',
                        precision: 0.001
                    },
                    {
                        column: 'Numero contatti totale'
                    },
                    {
                        column: 'Anziani',
                        precision: 0
                    },
                    {
                        column: 'Disabili',
                        precision: 0
                    },
                    {
                        column: 'Disagio adulto'
                    },
                    {
                        column: 'Famiglia e Minori'
                    }
                ]
            },

            // Columns aggregation
            groups: {
                'Target d\'utenza': ['Anziani', 'Disabili', 'Disagio adulto', 'Famiglia e Minori'],
                'Fascia d\'età': ['0-3', '4-7', '8-10', '11-14', '15-17', '18-25', '26-35', '36-50', '51-64', '>=65', 'Non fornita'],
                'Bisogno': ['Contributi economici', 'Educativo assistenziale e supporto inserimento lavorativo', 'Integrazione sociale', 'Interventi domiciliari e per la domiciliarità', 'Prevenzione', 'Pronto intervento sociale', 'Segretariato sociale', 'Servizi integrativi di supporto', 'Strutture residenziali', 'Strutture semi-residenziali', 'Supporto a persona e famiglia'],
                'Modalità': ['E-Mail', 'Fax', 'Lettera', 'Personale', 'Sportello', 'Telefono']
            },

            // Custom parse function name from string to number
            // If missing, 'parseFloat' is the default
            // You can also define a custom function (el) { return el; }
            parse: function(k,v) {
                if (k.indexOf('per residente') > -1 || k.indexOf('sul totale') > -1) {
                    return parseFloat(v.replace(",","."));
                } else {
                    return parseInt(v) || v;
                }
            }
        },
        {
            
            // Inherits attributes from dataSource named here
            source: 'file',
            path: 'data/',
            filename: 'WelfareBO-Programma-Assistenziale-Individualizzato-PAI2014 - Quartieri dei servizi.tsv',
            format: 'tsv',

            // Inherits attributes from geoType named here
            type: 'choropleth', // from dataTypes attributes
            bins: 7,
            precision: 10,
            palette: 'Reds',
            
            formatter: function(k,v) {
                if (k.indexOf('per residente') > -1 || k.indexOf('sul totale') > -1) {
                    return ',.1%';
                } else {
                    return '';
                }
            },
            
            schema: {
                
                // Key name of dataset
                name: 'assistenza-servizio',

                // Menu label for layer entry
                label: 'Programma Assistenziale Individualizzato (PAI)',

                // Key name of layer data refer to
                layer: 'quartieri',

                // Key of id values used for join
                id: 'Id',
                
                // Legend description
                description: 'PAI aperti per Quartiere che ha in gestione il caso',

                // Keys of data values shown on map on loading
                menu: [
                    {
                        column: 'PAI per residente',
                        precision: 0.001,
                    },
                    {
                        column: 'Numero PAI totale'
                    },
                    {
                        column: 'Uomini'
                    },
                    {
                        column: 'Donne'
                    },
                    {
                        column: 'Anziani'
                    },
                    {
                        column: 'Disagio adulto'
                    },
                    {
                        column: 'Famiglia e Minori'
                    },
                    {
                        column: 'Italiana'
                    },
                    {
                        column: 'Straniera'
                    }
                ]
            },

            // Columns aggregation
            groups: {
                'Genere': ['Donne', 'Uomini'],
                'Target d\'utenza': ['Anziani', 'Disagio adulto', 'Famiglia e Minori'],
                'Cittadinanza': ['Italiana', 'Straniera'],
                'Fascia d\'età': ['0-3', '4-7', '8-10', '11-14', '15-17', '18-25', '26-35', '36-50', '51-64', '>=65'],
                'Stato procedimento': ['Sconosciuto', 'Avviato', 'Chiuso', 'In corso fase esterna', 'Interrotto', 'Sospeso']
            },

            // Custom parse function name from string to number
            // If missing, 'parseFloat' is the default
            // You can also define a custom function (el) { return el; }
            parse: function(k,v) {
                if (k.indexOf('per residente') > -1 || k.indexOf('sul totale') > -1) {
                    return parseFloat(v.replace(",","."));
                } else {
                    return parseInt(v) || v;
                }
            }
        }
    ],

    // Management of data points passed by GET parameters
    pointsSet: {

        // Enable or not
        active: false,

        // Inherits attributes from dataSource named here
        source: 'dkan',

        // Cluster feature
        clusters: true,

        // Icons used for markers
        icon: 'icons/marker-icon.png',
        shadow: 'icons/marker-shadow.png'
    },

    // Info window appears on click on a region
    infowindow: {

        // Enable or not
        active: true,

        // Position respect to map (default 'inside', bottom-right corner)
        position: 'inside',

        // Default content when no region is selected
        content: {

            // Shown in normal view modes
            default: '<p style="text-align: center;"><a href="http://comune.bologna.it/" target="_blank"><img style="width:100%;" src="img/logobo.png"/></a></p><p>I dati della rete dei servizi sociali, sanitari e socio-sanitari erogati nei Quartieri della città. <h2 class="rtecenter"><strong>ANNO 2014</strong></h2> </p>',
                     mobile: '<p style="text-align: center;"><a href="http://comune.bologna.it/" target="_blank"><img style="width:100%;" src="img/logobo.png"/></a></p><p>I dati della rete dei servizi sociali, sanitari e socio-sanitari erogati nei Quartieri della città. <h2 class="rtecenter"><strong>ANNO 2014</strong></h2> </p>'

            // Shown on little screen, ie. on mobile
            //mobile: '<a href="http://dati.comune.bologna.it/node/15" target="_blank"><img src="img/logobo.png"/></a>'
        },

        // Data downloads allowed and linked in the infowindow
        downloads: {

            // Enable or not
            active: true,
            license: 'Licenza: <a href="http://creativecommons.org/licenses/by-sa/3.0/deed.it" target="_blank">CC BY-SA 3.0 Unported</a>.',
            path: 'img/',
            image: 'dwnl.png',
            files: [
                {

                    // Enable or not
                    active: true,

                    // Name of download
                    name: 'pai',
                    
                    // Inherits attributes from dataSource named here
                    source: 'file',
                        
                    datasets: ['assistenza-residenza', 'assistenza-servizio'],

                    // Name of the download, used to build filename
                    domain: 'http://dati.comune.bologna.it',
                    path: '/download/file/fid/',
                    filename: '2349',
                    
                    // Title for download icon
                    title: 'Scarica il dataset “Rendiconto PAI 2014”'
                },
                {

                    // Enable or not
                    active: true,

                    // Name of download
                    name: 'interventi',
                    
                    // Inherits attributes from dataSource named here
                    source: 'file',
                    
                    datasets: ['interventi-residenza', 'interventi-servizio'],

                    // Name of the download, used to build filename
                    domain: 'http://dati.comune.bologna.it',
                    path: '/download/file/fid/',
                    filename: '2352',
                    
                    // Title for download icon
                    title: 'Scarica il dataset “Consuntivo Interventi 2014”'
                },
                {

                    // Enable or not
                    active: true,

                    // Name of download
                    name: 'contatti',
                    
                    // Inherits attributes from dataSource named here
                    source: 'file',

                    datasets: ['sportelli-nodo'],

                    // Name of the download, used to build filename
                    domain: 'http://dati.comune.bologna.it',
                    path: '/download/file/fid/',
                    filename: '2345',
                    
                    // Title for download icon
                    title: 'Scarica il dataset “Consuntivo Sportelli Sociali di Quartiere 2014”'
                }
            ]
        },

        // Share current status of the map from the infowindow
        shareButtons: {

            // Enable or not
            active: true,

            // Text prepended to title of each share icon (+ 'su [Twitter | Facebook | Google Plus | Linkedin | ...]')
            title: 'Condividi Open Welfare Bologna o la situazione che hai riscontrato',

            // Fixed url for sharing
            url: 'http://dati.comune.bologna.it/open-welfare',

            path: 'icons/',

            // Twitter share icon
            twitter: {

                // Enable or not
                active: true,

                // Mention after sharing
                via: 'Twiperbole',

                // Text appended to tweet content, hashtags here (+ region name)
                //text: 'Servizi assistenziali a Bologna' // ie. Tweet
                text: function(d) {
                    return "Open Welfare Bologna ";
                }
            },

            // Facebook share icon
            facebook: {

                // Enable or not
                active: true
            },

            // Google Plus share icon
            gplus: {

                // Enable or not
                active: true
            },

            // LinkedIn share icon
            linkedin: {

                // Enable or not
                active: true
            },

            // Send an email
            email: {

                // Enable or not
                active: true,

                // Text prepended to subject (+ region name)
                subject: function(d) {
                    return " Open Welfare Bologna ";
                },

                // Text prepended to body (+ region name and URL)
                body: function(d, url) {
                    return "Open Welfare Bologna. La mappa che racconta i dati della rete dei servizi sociali, sanitari e socio-sanitari erogati nei quartieri della Città.\""+url+"\"";

                }
            },
            permalink: {

                // Enable or not
                active: true
            }
        },

        // Data visualization in the infowindow
        view: {

            // Enable or not
            active: true,

            // Inherits attributes from viewType named here
            type: 'table',
            options: {
                /*bold: function(k,v) {
                    return (k.indexOf('Totale') > -1);
                },*/
                filter: function(k,v) {
                    return (v != '0' && v != '' && k != 'Id' && !(k.indexOf('Nome') > -1));
                }
            }
        }
    },

    // All the controls added to the map
    controls: {

        // Fullscreen button at the bottom of zoom control
        fullscreen: {

            // Enable or not
            active: true,

            // Title on mouseover
            title: 'Fullscreen mode',
        },

        // Logo at the top-right corner
        logo: {

            // Enable or not
            active: false,

            // Title on mouseover
            title: '',

            // Image
            image: 'img/logobo.png',

            // Border
            border: false,

            // Link
            link: 'http://www.comune.bologna.it/'
        },

        // Reset the map at the initial status
        reset: {

            // Enable or not
            active: true,

            // Title on mouseover
            title: 'Reset',

            // Image
            image: 'icons/reset.png'
        },

        // Embed options
        embed: {

            // Enable or not
            active: false,

            // Title on mouseover
            title: 'Embed this map',

            // Image
            image: 'icons/embed.png',

            // The permalink (long form)
            permalink: true,

            // The shorted permalink (ignored if urlShortener is not active)
            shorturl: true,

            // iframe code for pages or posts
            iframe: true,

            // iframe code for sidebars (widget mode)
            widget: true,

            // Wordpress widget code if widget is available
            // See https://github.com/Dataninja/wp-cbmap-shortcode
            shortcode: true,

            // SVG code and download of SVG image from shapes
            svg: {

                // Enable or not
                active: true,

                // File name for downloaded image
                filename: 'welfarebo_map.svg',

                // Icon of the control
                image: 'icons/svg.png'
            }
        },

        // Take a screenshot of the map
        screenshot: {

            // Enable or not
            active: false,

            // Title on mouseover
            title: 'Take a screenshot',

            // Icon of the control
            image: 'icons/screenshot.png',

            // File name for downloaded image
            filename: 'welfarebo_map.png',
        },

        // Open the map in an other window or tab (only in embed mode)
        detach: {

            // Enable or not
            active: true,

            // Title on mouseover
            title: 'Open in new window', // ie. Open in new window

            // Image
            image: 'icons/detach.png', // ie. icons/detach.png
        },

        // Social buttons: like, tweet, +1
        socialButtons: {

            // Enable or not
            active: false,

            // Tweet button
            twitter: {

                // Enable or not
                active: true,

                // Specific options from Twitter Dev
                // See https://dev.twitter.com/web/tweet-button
                via: 'Twiperbole',
                lang: 'it',
                related: 'dataninjait:Data journalism made in Italy',
                hashtags: 'dataninja',
                count: 'vertical',

                // Text on the button
                text: 'Tweet'
            },

            // Facebook button
            facebook: {

                // Enable or not
                active: false,

                // Specific options from Facebook Dev
                // See https://developers.facebook.com/docs/plugins/like-button
                appId: '470290923072583', // appID dei Dataninja
                layout: 'box_count',
                action: 'like',
                'show-faces': false,
                share: false
            },

            // +1 button
            gplus: {

                // Enable or not
                active: true,
                
                // Specific options from Google Plus Dev
                // See https://developers.google.com/+/web/+1button/?hl=it
                size: 'tall',
                annotation: 'bubble'
            }
        },

        // Geocoder control with optional autocomplete feature,
        // based on the OSM Nominatim service, see http://wiki.openstreetmap.org/wiki/Nominatim
        geocoder: {

            // Enable or not
            active: false,

            // Geo layer name map shows after geocoding
            layer: 'comuni',

            // Input text is shown only after mouseover on icon
            collapsed: true,

            // Text on send form button
            title: 'Cerca il tuo comune',

            // Email contact for Nominatim
            email: 'jenkin@dataninja.it',

            // Zoom of map after geocoding
            zoom: 10,

            /* Autocomplete feature
             * The list of possible strings is stored in a json file
             */
            autocomplete: {

                // Enable or not
                active: false,

                // Domain without trailing slash (only for remote file)
                domain: '',

                // Relative or absolute path (with trailing slash)
                path: 'geo/',
            
                // Complete file name if single file (with extension)
                filename: 'lista_comuni.json',

                // File prefix (used as extension in file name template for multiple files)
                prefix: 'lista_comuni-', // ie. geo/lista_comuni-
            
                // File format (used as extension in file name template for multiple files)
                format: 'json',
                
                // URL generator based on region
                url: function(region) {
                    return this.domain + 
                        this.path + 
                        (region ? this.prefix + region + '.' + this.format : this.filename);
                },
            
                // Callback function of ajax request for custom result transformation
                transform: function(res) {
                    return res;
                }
            }
        }
    }
};

/*
 * Map configuration complete structure:
 *
 * - debug: [bool]
 * - dataSources: [object]
 *   - file [object]
 *     - domain [string]
 *     - path [string]
 *     - filename [string]
 *     - format [string]
 *     - url [string] function ( [string], [string], [string | int] )
 *     - transform [array] function ( [mixed] )
 *   - dkan [object]
 *     - domain [string]
 *     - path [string]
 *     - resourceId [string]
 *     - limit [int > 0]
 *     - format [string]
 *     - url [string] function ( [string], [string], [string | int] )
 *     - transform [array] function ( [object] )
 * - dataTypes [object]
 *   - choropleth [object]
 *     - bins [int > 0]
 *   - points [object]
 * - geoSources [object]
 *   - file [object]
 *     - domain [string]
 *     - path [string]
 *     - format [string]
 *     - url [string] function ( [string], [string], [string | int] )
 *     - transform [array] function ( [mixed] )
 *   - tileserver [object]
 *     - domain [string]
 *     - path [string]
 *     - url [string] function ( )
 * - geoTypes [object]
 *   - tile [object]
 *     - active [bool]
 *     - source [string matching geoSources attributes]
 *     - options [object matching http://leafletjs.com/reference.html#tilelayer-options structure]
 *   - vector [object]
 *     - active [bool]
 *     - style [object]
 *       - default [object matching http://leafletjs.com/reference.html#geojson-options style structure]
 *       - highlight [object]
 *       - selected [object]
 * - viewTypes [object]
 *   - table [string] function ( [object], [object] )
 * - dataSets [array]
 *   - [object]
 *     - active [bool]
 *     - source [string matching dataSources attributes]
 *     - type [string matching dataTypes attributes]
 *     - schema [object]
 *       - layer [string matching a geoLayer.name for joining]
 *       - id [string]
 *       - menu [string]
 *       - label [string]
 *       - legend [string]
 *       - values [string | array]
 *         - [string]
 *     - parse [string] | [mixed] function( [string] )
 *     - (other attributes are inherited from dataSources and dataTypes and can be overrided)
 *   - ...
 * - pointsSet [object]
 *   - active [bool]
 *   - source [string matching dataSources attributes]
 *   - clusters [bool]
 *   - icon [string]
 *   - shadow [string]
 * - geoLayers [array]
 *   - [object]
 *     - active [bool]
 *     - source [string matching geoSources attributes]
 *     - type [string matching geoTypes attributes]
 *     - schema [object]
 *       - name [string]
 *       - menu [string]
 *       - id [string]
 *       - label [string]
 *     - (other attributes are inherited from geoSources and geoTypes and can be overrided)
 *   - ...
 * - map [object]
 *   - bounds [object]
 *     - init [object]
 *       - southWest [object]
 *         - lat [float]
 *         - lng [float]
 *       - northEast [object]
 *         - lat [float]
 *         - lng [float]
 *     - max [object]
 *       - southWest [object]
 *         - lat [float]
 *         - lng [float]
 *       - northEast [object]
 *         - lat [float]
 *         - lng [float]
 *   - zoom [object]
 *     - init [int]
 *     - min [int]
 *     - max [int]
 *     - scrollWheel [bool]
 *   - center [object]
 *     - lat [float]
 *     - lng [float]
 *   - attribution [array]
 *     - [string]
 *     - ...
 * - description [object]
 *   - active [bool]
 *   - position [string]
 *   - content [string]
 * - urlShortener [object]
 *   - active [bool]
 *   - domain [string]
 *   - path [string]
 *   - signature [string]
 *   - prefix [string]
 *   - url [string] function ( )
 * - infowindow [object]
 *   - active [bool]
 *   - position [string]
 *   - content [object]
 *     - default [string]
 *     - mobile [string]
 *   - downloads [object]
 *     - active [object]
 *     - license [string]
 *     - files [array]
 *       - [object]
 *         - active [bool]
 *         - source [string matching dataSources attributes]
 *         - name [string]
 *         - filebase [string]
 *         - title [string]
 *         - image [string]
 *         - transform [array] function ( [object] )
 *         - (other attributes are inherited from geoSources and geoTypes and can be overrided)
 *       - ...
 *   - shareButtons [object]
 *     - active [bool]
 *     - title [string]
 *     - twitter [object]
 *       - active [bool]
 *       - via [string]
 *       - text [string]
 *     - facebook [object]
 *       - active [bool]
 *     - gplus [object]
 *       - active [bool]
 *     - linkedin [object]
 *       - active [bool]
 *     - email [object]
 *       - active [bool]
 *       - subject [string]
 *       - body [string]
 *     - permalink [object]
 *       - active [bool]
 *   - view [object]
 *     - active [bool]
 *     - type [string matching viewTypes attributes]
 *     - (other attributes are inherited from geoSources and geoTypes and can be overrided)
 * - label [object]
 *   - active [bool]
 *   - text [string]
 * - legend [object]
 *   - active [bool]
 *   - title [string]
 *   - description [string]
 *   - itemLabel [string]
 * - controls [object]
 *   - active [bool]
 *   - fullscreen [object]
 *     - active [bool]
 *     - title [string]
 *   - logo [object]
 *     - active [bool]
 *     - title [string]
 *     - image [string]
 *     - border [bool]
 *     - link [string]
 *   - reset [object]
 *     - active [bool]
 *     - title [string]
 *     - image [string]
 *   - embed [object]
 *     - active [bool]
 *     - title [string]
 *     - image [string]
 *     - permalink [bool]
 *     - shorturl [bool]
 *     - iframe [bool]
 *     - widget [bool]
 *     - shortcode [bool]
 *     - svg [object]
 *       - active [bool]
 *       - filename [string]
 *       - image [string]
 *   - screenshot [object]
 *     - active [bool]
 *     - title [string]
 *     - image [string]
 *     - filename [string]
 *     - ignoreMouse [bool]
 *     - ignoreAnimation [bool]
 *     - ignoreDimensions [bool]
 *     - ignoreClear [bool]
 *     - offsetX ['auto' | int]
 *     - offsetY ['auto' | int]
 *   - detach [object]
 *     - active [bool]
 *     - title [string]
 *     - image [string]
 *   - socialButtons [object]
 *     - active [bool]
 *     - twitter [object]
 *       - active [bool]
 *       - via [string]
 *       - lang [string (ISO 3166-1 alpha-2)]
 *       - related [string]
 *       - hashtags [string]
 *       - count [string]
 *       - text [string]
 *     - facebook [object]
 *       - active [bool]
 *       - appId [string]
 *       - layout [string]
 *       - action [string]
 *       - show-faces [bool]
 *       - share [bool]
 *     - gplus [object]
 *       - active [bool]
 *       - size [string]
 *       - annotation [string]
 *   - geocoder [object]
 *     - active [bool]
 *     - layer [string matching a geoLayer.name]
 *     - collapsed [bool]
 *     - title [string]
 *     - email [string]
 *     - zoom [int]
 *     - autoocmplete [object]
 *       - active [bool]
 *       - domain [string]
 *       - path [string]
 *       - filename [string]
 *       - prefix [string]
 *       - format [string]
 *       - url [string] function ( [string] )
 *       - transform [array] function ( [array] )
 */

