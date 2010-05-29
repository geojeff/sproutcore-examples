# ===========================================================================
# Project:   RaphaelPlay
# Copyright: ©2010 My Company, Inc.
# ===========================================================================

config :flot, :required => [:sproutcore]
config :demo, :required => [:sproutcore, 'flot']
config :flot_graph_types, :required => [:sproutcore, 'flot']
config :flot_setting_options, :required => [:sproutcore, 'flot']
config :flot_dual_axis, :required => [:sproutcore, 'flot']
config :raphaelplay, :required => [:sproutcore, :raphael]
config :test_controls, :required => [:sproutcore, "sproutcore/forms", "sproutcore/animation"], :theme => "sproutcore/ace"
config :phone_controls, :required => [:sproutcore, "sproutcore/forms", "sproutcore/animation"], :theme => "sproutcore/ace"
