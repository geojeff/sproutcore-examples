# ===========================================================================
# Project: geojeff's sproutcore-examples
# ===========================================================================

config :all, :url_prefix => "/sc/sproutcore/"
config :flot_graph_types, :url_prefix => "/sc/flot_graph_types/"
config :flot_setting_options, :url_prefix => "/sc/flot_setting_options/"
config :flot_dual_axis, :url_prefix => "/sc/flot_dual_axis/"
config :flot_carbon_dioxide, :url_prefix => "/sc/flot_carbon_dioxide/"
config :flot_human_population, :url_prefix => "/sc/flot_human_population/"
config :raphaelplay, :url_prefix => "/sc/raphaelplay/"
config :test_controls, :url_prefix => "/sc/test_controls/"
config :phone_controls, :url_prefix => "/sc/phone_controls/"

config :flot, :required => [:sproutcore]
config :flot_graph_types, :required => [:sproutcore, 'flot']
config :flot_setting_options, :required => [:sproutcore, 'flot']
config :flot_dual_axis, :required => [:sproutcore, 'flot'], :load_fixtures => true
config :flot_carbon_dioxide, :required => [:sproutcore, 'flot'], :load_fixtures => true
config :flot_human_population, :required => [:sproutcore, "sproutcore/forms", 'flot'], :load_fixtures => true, :theme => "sproutcore/ace"
config :raphaelplay, :required => [:sproutcore, :raphael], :load_fixtures => true
config :test_controls, :required => [:sproutcore, "sproutcore/forms", "sproutcore/animation"], :theme => "sproutcore/ace"
config :phone_controls, :required => [:sproutcore, "sproutcore/forms", "sproutcore/animation"], :theme => "sproutcore/ace"
